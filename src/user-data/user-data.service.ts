import {Injectable} from '@angular/core';

@Injectable()
export class UserDataService {

	//This might as well be a model declared somewhere to enforce stuff
	//a bit, but let's just leave it as it is.
	private user_data={
		name:"Michael Jackson",
		email:"michaeljackson@mymail.com"
	};

	public get_user_data() {return this.user_data;}
}
