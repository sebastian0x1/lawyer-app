import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../common/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyGuard implements CanActivate {
  constructor(private authService:AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.authService.hasToken()){
          return true; 
      }
      this.router.navigate([ '/login']);
      return false;
  }
  
}
