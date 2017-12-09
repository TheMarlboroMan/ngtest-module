import {Component} from '@angular/core';
import {VisitCounterService} from '../shared/visit-counter.service';
import {TimeAccessService} from '../shared/time-access.service';

@Component({
	templateUrl: './user-data-full.component.html'
})
export class UserDataFullComponent {

	public	constructor(
			public vcs:VisitCounterService,
			public tas:TimeAccessService) {
		vcs.add_visit();
	}

}
