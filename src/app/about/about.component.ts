import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {VisitCounterService} from '../core/visit-counter.service';
import {TimeAccessService} from '../core/time-access.service';
import {UselessService} from '../core/useless.service';
import {CurrentUserService} from '../core/current-user.service';

@Component({
	templateUrl: 'about.component.html'
})
export class AboutComponent {

	//[V10] adding the new service...
	public	constructor(
			public vcs:VisitCounterService,
			public tas:TimeAccessService,
			public cus:CurrentUserService,
			public us:UselessService,
			r:Router) {
		vcs.visit(r.url);
	}
}
