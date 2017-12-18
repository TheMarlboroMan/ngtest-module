import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../core/login.service';

@Component({
	template: ''
})
export class LogoutComponent implements OnInit {

	public	constructor(
		private ls:LoginService,
		private router:Router) {

	}

	public	ngOnInit():void {

		this.ls.do_logout();
		this.router.navigate(['welcome']);
	}
}
