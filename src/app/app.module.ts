import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Application components...
import { AppComponent } from './app.component';
import {UserDataModule} from '../user-data/user-data.module';

@NgModule({
	//These are the "private" pipes, components and directives.
	declarations: [
		AppComponent,
	],
	//These are the pieces of functionality needed for the module, private.
	imports: [
		BrowserModule,	//This one is explicitly importing usual angular directives.
				//Root modules import this one, while feature modules import
				//CommonModule. Failure to do so will bring failure when
				//working with lazy loading stuff...
		UserDataModule
	],
	//These are services... 
	providers: [],
	//This is the root component of this module. Given that AppComponent is
	//bootstrapped, it is the "root module", as opposed to "feature module".
	bootstrap: [AppComponent]
})
export class AppModule { }
