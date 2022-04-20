import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private router: Router) { }

  signIn(user:any){
      console.log(user)  
      return this.http.post<any> ('https://backend-lawyer-app.herokuapp.com/' + 'api/auth/login', user);
  }

  hasToken(){
     return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
