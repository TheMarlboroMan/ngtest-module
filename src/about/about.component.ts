import {Component} from '@angular/core';

//[V9] Let the compiler know...
import {VisitCounterService} from '../shared/visit-counter.service';

@Component({
	templateUrl: 'about.component.html'
})
export class AboutComponent {

	public	constructor(public vcs:VisitCounterService) {
		vcs.add_visit();
	}
}
