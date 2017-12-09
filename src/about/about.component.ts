import {Component} from '@angular/core';
import {VisitCounterService} from '../shared/visit-counter.service';

@Component({
	templateUrl: 'about.component.html'
})
export class AboutComponent {

	public	constructor(public vcs:VisitCounterService) {
		vcs.add_visit();
	}
}
