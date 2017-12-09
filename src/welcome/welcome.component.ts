import {Component} from '@angular/core';
//[V8] Import the service...
import {VisitCounterService} from '../about/visit-counter.service';

@Component({
	templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

	//[V8] And use it...
	public	constructor(public vcs:VisitCounterService){
		vcs.add_visit();
	}

	public 	show_lorem_ipsum:boolean=true;
}
