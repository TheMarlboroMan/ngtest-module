//This protects against access to logout for authorized users...

import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {LoginService} from './login.service';

@Injectable()
export class LogoutGuardService implements CanActivate {

	public	constructor(
		private ls:LoginService,
		private r:Router){

	}

	public	canActivate():boolean {

		let auth:boolean=this.ls.is_user_authorized();

		if(!auth) {
			console.log("LogoutGuardService prevented logout access for not logged in user");
			this.r.navigate(['login'], {queryParams: {badaccess:true}});
			return false;
		}

		return true;
	}
}


