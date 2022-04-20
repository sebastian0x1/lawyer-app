import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): any {
      const toekenReq = req.clone({
        setHeaders: {
          Autorization: `x-access-token ${this.authService.getToken()}`
        }
      })
      return next.handle(toekenReq)
  }
  constructor(private authService: AuthService) { }
}
