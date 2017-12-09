import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome.component';
//[V9] Importing the new shared module...
import {SharedModule} from '../shared/shared.module';

@NgModule({
	//[V9] We import it...
	imports: [CommonModule, SharedModule],
	exports: [WelcomeComponent],
	providers: [],
	declarations: [WelcomeComponent]
})
export class WelcomeModule {

}
