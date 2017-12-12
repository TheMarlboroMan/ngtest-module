import {Component} from '@angular/core';

import {CurrentUserService} from '../core/current-user.service';
import {UselessService} from '../shared/useless.service';

@Component({
	selector : 'dance',
	templateUrl: 'dance.component.html'
})
export class DanceComponent {

	public	constructor(
		public cus:CurrentUserService,
		public us:UselessService) {

	}

}
