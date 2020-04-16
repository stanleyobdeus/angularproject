import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

export class LogoutGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
         boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
         const token = localStorage.getItem('token');

        if (token) {
            return false;
        }
            else {
                return true;     
        }
          
           
        //if the token is not empty it will return true 
    }
// tslint:disable-next-line: eofline
}