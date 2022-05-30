import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  navchange: EventEmitter<number> = new EventEmitter();
 

  putUserInfo(userInfo: any){
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    
  }

  emitNavChangeEvent(userInfo:any) {
    this.navchange.emit(userInfo);
  }

  getNavChangeEmitter() {
    return this.navchange;
}

  
  getUserInfo(): string{
    return JSON.parse(localStorage.getItem('userInfo') || "{}");
    
  }


}