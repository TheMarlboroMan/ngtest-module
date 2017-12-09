//[V3] This file is new... It will be a component to update the user data through a 
//two-way bound form.

//[V3] We import the event emmiter and output decorator to communicate with the parent.
import {Component, EventEmitter, Output} from '@angular/core';
//[V3] There's not need to import the FormsModule thing here... It is supposedly visible through user-data.module.ts.

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

	@Output() on_saved:EventEmitter<void>=new EventEmitter<void>();
	private	data_model:UserDataModel=null;

	public	constructor(private uds:UserDataService){

		let raw_data=uds.get_user_data();
		this.data_model=new UserDataModel(raw_data.name, raw_data.email);
	}

	public	get_model():UserDataModel {return this.data_model;}

	//[V3] How fun, notice that we don't need to refer to the form at all,
	//since it's bound to the model we already have.
	public	send_data() {

		//This sets the data in the service...
		this.uds.set_user_data(this.data_model.name, this.data_model.email);

		//[V3]But the user-data.component does not display the changes, as it 
		//holds its own model. Because that component is a sibling of
		//this, we can do the contrived way of sending a message to the
		//parent and have the parent react... A better thing would be
		//to share a service, as we will do in a next version, if possible.

		this.on_saved.emit();
	}
}

