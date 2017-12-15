import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {AboutComponent} from './about.component';
import {ModuleRouting} from './about.routing';

@NgModule({
	imports: [ModuleRouting, SharedModule],
	declarations: [AboutComponent],

})
export class AboutModule {

}


