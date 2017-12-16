import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {WelcomeComponent} from './welcome.component';
import {ModuleRouting} from './welcome.routing';

//This will trigger the double inclusion guard, as this module is lazyly loaded.
/*import {CoreModule} from '../core/core.module';*/

@NgModule({
	imports: [SharedModule, ModuleRouting, /*CoreModule*/],
	declarations: [WelcomeComponent]
})
export class WelcomeModule {

}
