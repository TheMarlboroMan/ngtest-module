//This is the first time I use this... Okay, we bring the annotation...
import {NgModule} from '@angular/core';
//This is a feature module, so we don't load BrowserModule but this one.
import {CommonModule} from '@angular/common';

//We import the things we had imported in the app.module.ts file before...

//Module components...
import {UserDataComponent} from '../user-data/user-data.component';

//Module services...
import {UserDataService} from '../user-data/user-data.component';

//Module pipes...
import {DeformUserEmailPipe} from '../user-data/deform-user-email.pipe';

//Here we really create the new module... We can mostly do it as we did it before
//and remove the things that were in the app.module.ts. file.
@NgModule({
	//Remember, these are the private parts...
	declarations: [
		UserDataComponent, 
		DeformUserEmailPipe
	]
	//These are the inner working ones...
	imports: [
		CommonModule
	],
	//And these are still services...
	providers: [
		UserDataService
	],
	//This one is new!!!, it is the public stuff it exposes.
	exports: [
		UserDataComponent
	]
})
//The class is, of course, empty.
export class UserDataModule {

}
