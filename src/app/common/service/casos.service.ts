import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CasoInterface } from '../../components/dashboard/caso/caso.interface';

@Injectable({
  providedIn: 'root'
})
export class CasosService {

  constructor(private http: HttpClient) { }

  getCasos(){
    return this.http.get<any>('https://backend-lawyer-app.herokuapp.com/'+ 'api/caso')
  }

  selectCase(caso: CasoInterface){
    localStorage.setItem('selectedCase', caso.id);
  }

  getCaseOfLocalStorage(): string{
    return localStorage.getItem('selectedCase') || "";
  }
}
