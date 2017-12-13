import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {VisitCounterService} from '../core/visit-counter.service';
import {TimeAccessService} from '../core/time-access.service';
import {UselessService} from '../core/useless.service';

@Component({
	templateUrl: './user-data-full.component.html'
})
export class UserDataFullComponent {

	public	constructor(
			public vcs:VisitCounterService,
			public tas:TimeAccessService,
			public us:UselessService,
			r:Router) {
		vcs.visit(r.url);
	}

}
