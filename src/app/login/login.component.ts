import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {LoginService} from '../core/login.service';

class LoginModel {
	
	public	login:string;
	public	pass:string;

	public	clear():void {

		this.login="";
		this.pass="";
	}
}

@Component({
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

	public	message:string="";
	public	data_model:LoginModel=new LoginModel();
	public	sending:boolean=false;

	public	constructor(
		private actroute:ActivatedRoute,
		private router:Router,
		private ls:LoginService){
	}

	public	ngOnInit():void {

		this.actroute.queryParamMap
		.switchMap( (params:ParamMap) => {
			let msg="Please, enter your identification data";
			if(params.has('intercept')) {			
				msg="You attempted to enter a forbidden area. Please, authenticate yourself.";
			}
			else if(params.has('badaccess')) {
				msg="What are you trying to pull navigating to logout like that?";
			}
			return Promise.resolve(msg);
		})
		.subscribe( (data:string) => {
			this.message=data;
		});

		/* When you need to explain something, you failed. Or the 
		tool failed. I think the tool failed here... see, I am subscribing
		to the observable paramap, right?. Well, if I use switchMap I need
		to return another observable, promise or iterable, so I return a promise
		with the message. I could just change the message inside the switchMap
		but that would be dirty... Still, this is only for real params...
		query params is the solution above...

		this.actroute.paramMap
		.switchMap( (params:ParamMap) => {
			let msg="Please, enter your identification data";
			if(params.has('intercept')) {			
				msg="You attempted to enter a forbidden area. Please, authenticate yourself.";
			}
			else if(params.has('badaccess')) {
				msg="What are you trying to pull navigating to logout like that?";
			}
			return Promise.resolve(msg);
		})
		.subscribe( (data:string) => {
			this.message=data;
		});

*/

		/*This would work, but if we click on "login" then on a protected route the message does not refresh.
		if(this.actroute.snapshot.paramMap.has('intercept')) {
			this.message="You attempted to enter a forbidden area. Please, authenticate yourself.";
		}
*/
	}

	public	submit_form():void {

		console.log("Submitting data");

		this.sending=true;

		this.ls.do_login(this.data_model.login, this.data_model.pass)
			.then( (result) => {

			if(!result) {
				this.sending=false;
				this.data_model.clear();
				this.message="Login data was invalid";
			}
			else {
				this.router.navigate(['/child-routing'], { queryParams:{welcome:true}});
			}
		});
	
	}

}
