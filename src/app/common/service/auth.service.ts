import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  signIn(user:any){
      console.log(user)  
      return this.http.post<any> ('https://backend-lawyer-app.herokuapp.com/' + 'api/auth/login', user);
  }

  hasToken(){
     return !!localStorage.getItem('token')
  }
}
