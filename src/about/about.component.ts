import {Component} from '@angular/core';

//[V7] Getting ready to use the new service here...
import {VisitCounterService} from './visit-counter.service';

//[V7] Just so you see, we can use stuff from the root component here...
import {UserDataService} from '../user-data/user-data.service';

@Component({
	templateUrl: 'about.component.html'
})
export class AboutComponent {

	public	constructor(
		public vcs:VisitCounterService,
		public uds:UserDataService) {
		vcs.add_visit();
	}
}
