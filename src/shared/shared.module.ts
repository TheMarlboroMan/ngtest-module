import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitCounterService} from './visit-counter.service';
import {TimeAccessService} from './time-access.service';

/*
[V11] In V10 we made all services exposed here singletons... Well, what we 
actually did is export them at the root of the DI tree so every component
gets to use the one declared here... Now we are going to go both ways: we'll
set the TimeAccessService component at the root and the VisitCounterService 
as "providers" so we'll get two different VisitCounterService services:
one at the components of the root and one at the ones in the lazily loaded 
module.

Still, this won't be what we want: we'll have two shared counters...
*/
@NgModule({
	providers: [VisitCounterService]
})
export class SharedModule {
	public static	forRoot():ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [TimeAccessService]
		};
	}
}
