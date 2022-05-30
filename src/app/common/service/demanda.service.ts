import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandaService {

  constructor(private http: HttpClient,) { }
  emitter: EventEmitter<any> = new EventEmitter();


  getDemandas() {
    return localStorage.getItem('form-data');

  }

  emitDemandaCreateEvent(data: any) {
    this.emitter.emit(data);
  }

  getDemandaChangeEmitter() {
    return this.emitter;
  }

  setDemandas(val: any) {
    localStorage.setItem('form-data', JSON.stringify(val));
  }



}
