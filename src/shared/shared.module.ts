import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitCounterService} from './visit-counter.service';

@NgModule({
	providers: [VisitCounterService],
})
export class SharedModule {

}
