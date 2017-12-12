import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitCounterService} from './visit-counter.service';
import {TimeAccessService} from './time-access.service';
import {UselessService} from './useless.service';
import {CrazyCapsPipe} from './crazy-caps.pipe'

@NgModule({
	declarations: [CrazyCapsPipe],
	exports: [CrazyCapsPipe],
	providers: [UselessService]
})
export class SharedModule {
	public static	forRoot():ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [TimeAccessService, VisitCounterService]
		};
	}
}
