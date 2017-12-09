//[V4] We remove the event emitter and output stuff...
import {Component} from '@angular/core';

import {UserDataService} from './user-data.service';

//This is the data model for the form binding.
class UserDataModel{
	public	name:string="";
	public	email:string="";

	public	constructor(n:string, e:string){
		this.name=n;
		this.email=e;
	}
}

@Component({
	selector: 'user-data-update',
	templateUrl: 'user-data-update.component.html'
})
export class UserDataUpdateComponent{

	//[V4] Remove the emitter...
	private	data_model:UserDataModel=null;

	public	constructor(private uds:UserDataService){

		let raw_data=uds.get_user_data();
		this.data_model=new UserDataModel(raw_data.name, raw_data.email);
	}

	public	get_model():UserDataModel {return this.data_model;}

	//[V4] We just use the service: it will emit something that the 
	//UserDataComponent will listen to.
	//since it's bound to the model we already have.
	public	send_data() {
		this.uds.set_user_data(this.data_model.name, this.data_model.email);
	}
}

