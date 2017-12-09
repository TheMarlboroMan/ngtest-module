import {Component} from '@angular/core';

//[V7] We can import the service, but in won't work...
//import {VisitCounterService} from '../about/visit-counter.service';

@Component({
	templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

//[V7] This does not work!!!!. The service would be registered in a lazily
//loaded module, and this module is eagerly loaded at the root level!!!.
//	public	constructor(public vcs:VisitCounterService) {
//		vcs.add_visit();
//	}

	public show_lorem_ipsum:boolean=true;
}
