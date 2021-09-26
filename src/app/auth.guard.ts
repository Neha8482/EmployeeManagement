import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

import { AuthserviceService } from './authservice.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthserviceService,
        private localstorageservice : LocalStorageService
    ) {}

   /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }*/
    canActivate() {
        if(this.localstorageservice.retrieve('currentUser') && this.localstorageservice.retrieve('currentUser').valid){
           
            return true;
        }
        this.router.navigate(['login']);
        alert("not logged in");
        return false;
    }
}