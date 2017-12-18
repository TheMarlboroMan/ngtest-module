import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/delay';

import {StorageService} from '../core/storage.service';


@Injectable()
export class LoginService {

	private	userauthorized:boolean=false;

	public	constructor(
		private ss:StorageService){

		console.log("Querying the storage service...");

		let s=this.ss.get('loggedin');
		if(s && s=='true') {
			this.userauthorized=true;
		}

		console.log("Storage service sets userauthorized to "+this.userauthorized);
	}

	public	is_user_authorized():boolean {

		return this.userauthorized;
	}

	public	do_logout():void {

		if(this.userauthorized) {
			this.userauthorized=false;
			this.ss.set('loggedin','false');
		}
	}

	public	do_login(user:string, pass:string):Promise<boolean> {

		let success=false;

		if(user=='liz' && pass=='lemon') {
			success=true;
			this.userauthorized=true;
			this.ss.set('loggedin','true');
		}

		return Observable.of(success).delay(1000).toPromise();
	}
}
