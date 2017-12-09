import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome.component';

//[V8] Preparing to use the service...
import {VisitCounterService} from '../about/visit-counter.service';

@NgModule({
	imports: [CommonModule],
	exports: [WelcomeComponent],
	//[V8] Get a new copy of the service...
	providers: [VisitCounterService],
	declarations: [WelcomeComponent]
})
export class WelcomeModule {

}
