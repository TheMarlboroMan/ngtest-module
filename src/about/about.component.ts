import {Component} from '@angular/core';
import {VisitCounterService} from '../shared/visit-counter.service';
import {TimeAccessService} from '../shared/time-access.service';

@Component({
	templateUrl: 'about.component.html'
})
export class AboutComponent {

	//[V10] adding the new service...
	public	constructor(
			public vcs:VisitCounterService,
			public tas:TimeAccessService) {
		vcs.add_visit();
	}
}
