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

  findIdOfComunabyName(arrComuna: Array<any>, nombre: string){
      arrComuna.filter(comuna => comuna.nombre === nombre);
      return arrComuna[0].id; 
  }
}
