//[V3] We import ViewChild so we can refer to child components.
import { Component, ViewChild } from '@angular/core';

//[V3] We also import the child component we wish to refer to...
import {UserDataComponent} from '../user-data/user-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public title = 'module hell!';

	@ViewChild(UserDataComponent) private udc:UserDataComponent;

	//[V3] Here we listen to the event from the children update component 
	//and fire a method of the user-data child.
	public user_data_saved(nothing:void) {
		this.udc.load_user_data();
	}
}
