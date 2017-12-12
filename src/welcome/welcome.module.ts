import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome.component';
import {SharedModule} from '../shared/shared.module';
import {ModuleRouting} from './welcome.routing';

//This will trigger the double inclusion guard, as this module is lazyly loaded.
/*import {CoreModule} from '../core/core.module';*/

@NgModule({
	imports: [CommonModule, SharedModule, ModuleRouting, /*CoreModule*/],
	declarations: [WelcomeComponent]
})
export class WelcomeModule {

}
