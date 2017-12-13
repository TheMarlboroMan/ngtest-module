import {Injectable} from '@angular/core';

//Part of the "core" module. This is a fun test: the app.component will 
//use this service and set the username, then it will be used in other 
//components. Because the module can be imported only ONCE there will be 
//no other instances of this service, this everybody will be Liz Lemon.

@Injectable()
export class CurrentUserService {

	private	username:string="Default";

	public	set_current_username(val:string):void {

		this.username=val;
		console.log("Username is set to "+this.username);
	}

	public	get_current_username():string {

		return this.username;
	}
}
