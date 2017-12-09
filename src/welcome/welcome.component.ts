import {Component} from '@angular/core';

//[V7] This does not work!.
//import {VisitCounterService} from '../about/visit-counter.service';

@Component({
	templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

	//[V7] This does not work!!!!.
//	public	constructor(public vcs:VisitCounterService) {
//		vcs.add_visit();
//	}

	public show_lorem_ipsum:boolean=true;
}
