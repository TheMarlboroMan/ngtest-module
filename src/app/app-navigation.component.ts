import {Component} from '@angular/core';
import {LoginService} from './core/login.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './app-navigation.component.html',
	styleUrls: ['./app-navigation.component.css'],
})
export class AppNavigationComponent {

	public	constructor(
		private ls:LoginService) {

	}

	public	is_user_authorized():boolean {

		return this.ls.is_user_authorized();
	}

}
