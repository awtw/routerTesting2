import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import {AuthService} from './auth.service';



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if(authenticated){
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }
  canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.canActivate(childRoute, state);
  }

  constructor(private authService: AuthService, private router: Router) {

  }

}
