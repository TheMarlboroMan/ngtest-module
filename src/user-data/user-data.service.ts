import {Injectable} from '@angular/core';

//[V4] we import the "subject" so we can create observables...
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserDataService {

	//[V4] Pay attention here: we define a source of observables and then
	//open a gate for it...
	private	data_changed_source:Subject<void>=new Subject<void>();
	public	data_changed$=this.data_changed_source.asObservable();

	//This might as well be a model declared somewhere to enforce stuff
	//a bit, but let's just leave it as it is.
	private user_data={
		name:"Michael Jackson",
		email:"michaeljackson@mymail.com"
	};

	public	get_user_data() {return this.user_data;}

	public	set_user_data(n:string, e:string):void{
		this.user_data.name=n;
		this.user_data.email=e;
		//[V4] Now, each time we change, we fire this, that subscribers will catch!
		//The magic happens in UserDataComponent, which subscribes to this...
		this.data_changed_source.next();
	}
}
