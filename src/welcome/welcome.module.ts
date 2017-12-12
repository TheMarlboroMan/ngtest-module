import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome.component';
import {SharedModule} from '../shared/shared.module';
import {ModuleRouting} from './welcome.routing';

@NgModule({
	imports: [CommonModule, SharedModule, ModuleRouting],
	exports: [WelcomeComponent],
	declarations: [WelcomeComponent]
})
export class WelcomeModule {

}
