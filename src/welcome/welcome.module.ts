import {NgModule} from '@angular/core';
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
