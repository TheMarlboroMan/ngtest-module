import { Component } from '@angular/core';

import {CurrentUserService} from '../core/current-user.service';
import {UselessService} from '../shared/useless.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

	public title = 'module hell!';

	public	constructor(
		private cus:CurrentUserService,
		private us:UselessService,) {

		cus.set_current_username("Liz Lemon");
		us.set_data("Useless data!");
	}
}
