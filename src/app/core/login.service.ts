import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {

	private	userauthorized:boolean=false;

	public	is_user_authorized():boolean {

		return this.userauthorized;
	}

	public	do_logout() {

		this.userauthorized=false;
	}

	public	do_login(user:string, pass:string):Promise<boolean> {

		let success=false;

		if(user=='liz' && pass=='lemon') {
			success=true;
			this.userauthorized=true;
		}

		return Observable.of(success).delay(1000).toPromise();
	}
}
