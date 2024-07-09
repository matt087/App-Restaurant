import { CanActivateFn, GuardResult, MaybeAsync } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree,Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(): boolean {
    if(this.authService.loggedIn()){
      return true;
    } 
      this.router.navigate(['/login'])
      return false;
  }
}

