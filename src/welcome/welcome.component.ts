import {Component} from '@angular/core';

//[V9] The module is imported, providing the service. We just let the compiler know about it...
import {VisitCounterService} from '../shared/visit-counter.service';

@Component({
	templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

	public	constructor(public vcs:VisitCounterService){
		vcs.add_visit();
	}

	public 	show_lorem_ipsum:boolean=true;
}
