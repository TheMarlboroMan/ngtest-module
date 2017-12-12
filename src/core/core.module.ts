import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CurrentUserService} from './current-user.service';

@NgModule({
	providers: [CurrentUserService]
})
export class CoreModule {

	public	constructor(@Optional() @SkipSelf() guard:CoreModule) {

		console.log("Loading CoreModule");

		if(guard){
			throw new Error('CoreModule was already loaded.');
		}
	}

}
