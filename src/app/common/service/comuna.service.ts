import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {

  constructor(private http: HttpClient) { }

  getComunas(){
    return this.http.get<any>('https://backend-lawyer-app.herokuapp.com/'+ 'api/comunas')
  }
}
