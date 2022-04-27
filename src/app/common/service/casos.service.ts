import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasosService {

  constructor(private http: HttpClient) { }

  getCasos(){
    return this.http.get<any>('https://backend-lawyer-app.herokuapp.com/'+ 'api/caso')
  }

  selectCase(caso: any){
    localStorage.setItem('selectedCase', caso)
  }
}
