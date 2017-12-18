import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {LoginService} from './login.service';

@Injectable()
export class AuthorizationService implements CanActivate {

	public	constructor(
		private router:Router,
		private	ls:LoginService
	){

	}

	//So... ActivatedRouteSnapshot and RouterStateSnapshot are both 
	//future states if we pass the check. For this thing, we only care about
	//RouterStateSnapshot, which contains the url we're trying to navigate to...

	public	canActivate(ars:ActivatedRouteSnapshot, rss:RouterStateSnapshot):boolean {

		console.log("doing canActivate on "+rss.url);

		//I have tested this: the imperative navigation takes place and
		//works whether we return true or false.

		if(!this.ls.is_user_authorized()) {
			this.router.navigate(['/login', {intercept:true}]);
			return false;
		}
		else {
			return true;
		}				
	}
}
