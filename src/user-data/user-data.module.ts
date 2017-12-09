//This is the first time I use this... Okay, we bring the annotation...
import {NgModule} from '@angular/core';
//This is a feature module, so we don't load BrowserModule but this one.
import {CommonModule} from '@angular/common';

//[V3] Because we are going to have a template form, we need this...
import {FormsModule} from '@angular/forms';

//We import the things we had imported in the app.module.ts file before...

//Module components...
//[V3] we fix the paths and add the new component...
import {UserDataComponent} from './user-data.component';
import {UserDataUpdateComponent} from './user-data-update.component';

//Module services...
import {UserDataService} from './user-data.service';

//Module pipes...
import {DeformUserEmailPipe} from './deform-user-email.pipe';

//Here we really create the new module... We can mostly do it as we did it before
//and remove the things that were in the app.module.ts. file.
@NgModule({
	//Remember, these are the private parts
	declarations: [
		UserDataComponent,
		//[V3] We import the new component now and expose it in "exports".
		UserDataUpdateComponent,
		DeformUserEmailPipe,
	],
	//These are the inner working ones...
	imports: [
		CommonModule,
		//[V3] The form thing is here too...
		FormsModule,
	],
	//And these are still services...
	providers: [
		UserDataService,
	],
	//This one is new!!!, it is the public stuff it exposes.
	exports: [
		UserDataComponent,
		//[V3] We need to expose the new component so it is visible outside this module.
		UserDataUpdateComponent,
	]
})
//The class is, of course, empty.
export class UserDataModule {}
