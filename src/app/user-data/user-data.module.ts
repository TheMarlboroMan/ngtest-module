import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

//Module components...
import {UserDataFullComponent} from './user-data-full.component';
import {UserDataComponent} from './user-data.component';
import {UserDataUpdateComponent} from './user-data-update.component';

//Module services...
import {UserDataService} from './user-data.service';

//Here we really create the new module... We can mostly do it as we did it before
//and remove the things that were in the app.module.ts. file.
@NgModule({
	//Remember, these are the private parts that BELONG here.
	declarations: [
		UserDataComponent,
		UserDataUpdateComponent,
		UserDataFullComponent,
	],
	//These are the inner working ones...
	imports: [
		FormsModule,
		SharedModule
	],
	//And these are still services...
	providers: [
		UserDataService,
	],
	//This one is new!!!, it is the public stuff it exposes.
	exports: [
	]
})
//The class is, of course, empty.
export class UserDataModule {}
