import {NgModule, Optional, SkipSelf, ModuleWithProviders} from '@angular/core';

import {CurrentUserService} from './current-user.service';
import {TimeAccessService} from './time-access.service';
import {VisitCounterService} from './visit-counter.service';
import {UselessService} from './useless.service';

@NgModule({
	providers: [CurrentUserService]
})
export class CoreModule {

public static	forRoot():ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [TimeAccessService, UselessService, VisitCounterService]
		};
	}

	public	constructor(@Optional() @SkipSelf() guard:CoreModule) {

		console.log("Loading CoreModule");

		if(guard){
			throw new Error('CoreModule was already loaded.');
		}
	}

}
