//[V9] A new shared module... This will rid us of a few "providers" statements.
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//[V9] We moved this service here...
import {VisitCounterService} from './visit-counter.service';

@NgModule({
	//[V9] Let's ignore the rest of the entries...
	providers: [VisitCounterService],
})
export class SharedModule {

}
