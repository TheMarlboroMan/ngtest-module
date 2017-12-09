import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {ModuleRouting} from './about.routing';

import {VisitCounterService} from './visit-counter.service';

//[V7] This does not work!
//import {DeformUserEmailPipe} from '../user-data/deform-user-email.pipe';
//[V7] Instead, we need to load the FULL module...
import {UserDataModule} from '../user-data/user-data.module';

@NgModule({
	//[V7] Importing the full module to access pipes and components.
	//Notice that we don't add UserDataService anywhere. It goes in the component.
	imports: [CommonModule, ModuleRouting, UserDataModule],
	exports: [AboutComponent],
	providers: [VisitCounterService],
	declarations: [AboutComponent]
})
export class AboutModule {

}


