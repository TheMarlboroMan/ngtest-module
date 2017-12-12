import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitCounterService} from './visit-counter.service';
import {TimeAccessService} from './time-access.service';
import {CrazyCapsPipe} from './crazy-caps.pipe'

@NgModule({
	declarations: [CrazyCapsPipe],
	exports: [CrazyCapsPipe]
})
export class SharedModule {
	public static	forRoot():ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [TimeAccessService, VisitCounterService]
		};
	}
}
