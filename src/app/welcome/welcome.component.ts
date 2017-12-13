import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {VisitCounterService} from '../core/visit-counter.service';
import {TimeAccessService} from '../core/time-access.service';
import {CurrentUserService} from '../core/current-user.service';
import {UselessService} from '../core/useless.service';

@Component({
	templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

	public	constructor(
			public vcs:VisitCounterService,
			public tas:TimeAccessService,
			public cus:CurrentUserService,
			public us:UselessService,
			r:Router) {
		vcs.visit(r.url);
	}

	public 	show_lorem_ipsum:boolean=true;
}
