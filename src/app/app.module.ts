import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Application components...
import { AppComponent } from './app.component';
import {UserDataComponent} from './user-data.component';

//Application pipes
import {DeformUserEmailPipe} from './deform-user-email.pipe';

//Application services
import {UserDataService} from './user-data.service';

@NgModule({
	//These are the "private" pipes, components and directives.
	declarations: [
		AppComponent,
		UserDataComponent,
		DeformUserEmailPipe
	],
	//These are the pieces of functionality needed for the module, private too.
	imports: [
		BrowserModule	//This one is explicitly importing usual angular directives.
				//Root modules import this one, while feature modules import
				//CommonModule. Failure to do so will bring failure when
				//working with lazy loading stuff...
	],
	//These are services... 
	providers: [
		UserDataService //This service declared here is accesible to all children components.
	],
	//This is the root component of this module. Given that AppComponent is
	//bootstrapped, it is the "root module", as opposed to "feature module".
	bootstrap: [AppComponent]
})
export class AppModule { }
