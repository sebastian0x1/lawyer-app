import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandaService {

  constructor(private http: HttpClient) { }

  getTipoDemandas(){
    return this.http.get<any>('https://backend-lawyer-app.herokuapp.com/'+ 'api/tipodemanda')
  }

  getDemandas(){
    
     return this.http.get<any>('https://backend-lawyer-app.herokuapp.com/'+ 'api/demanda')

  }

  createDemanda(data: any){
    console.log(data)
    return this.http.post<any>('https://backend-lawyer-app.herokuapp.com/' + 'api/demanda', data)

  }

  findIdOfTipoDemandabyName(arrTipo: Array<any>, nombre: string){
    arrTipo.filter(tipo => tipo.nombre === nombre);
    return arrTipo[0].id; 
  }



}
