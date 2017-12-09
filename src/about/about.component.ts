import {Component} from '@angular/core';

import {VisitCounterService} from './visit-counter.service';

@Component({
	templateUrl: 'about.component.html'
})
export class AboutComponent {

	//[V8] Removed user data service...
	public	constructor(public vcs:VisitCounterService) {
		vcs.add_visit();
	}
}
