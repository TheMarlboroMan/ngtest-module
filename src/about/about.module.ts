import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {ModuleRouting} from './about.routing';

import {VisitCounterService} from './visit-counter.service';

//[V8] Removed the whole pipe ordeal.
@NgModule({
	imports: [CommonModule, ModuleRouting],
	exports: [AboutComponent],
	providers: [VisitCounterService],
	declarations: [AboutComponent]
})
export class AboutModule {

}


