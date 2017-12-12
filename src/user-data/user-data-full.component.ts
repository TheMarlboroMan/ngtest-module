import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {VisitCounterService} from '../shared/visit-counter.service';
import {TimeAccessService} from '../shared/time-access.service';
import {UselessService} from '../shared/useless.service';

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
