import {Component} from '@angular/core';
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
