//[V5] Another very simple module... We can review what we did for the other...
import {NgModule} from '@angular/core';

//[V5] If we don't import this thing, we won't be able to access stuff like the ngIf directive, used briefly in the welcome component.
import {CommonModule} from '@angular/common';

import {WelcomeComponent} from './welcome.component';

@NgModule({
	imports: [CommonModule],
	exports: [WelcomeComponent],
	providers: [],
	declarations: [WelcomeComponent]
})
export class WelcomeModule {
	
}
