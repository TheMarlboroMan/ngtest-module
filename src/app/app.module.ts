import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Application components...
import { AppComponent } from './app.component';
import {UserDataModule} from '../user-data/user-data.module';
//[V5] Our new module!
import {WelcomeModule} from '../welcome/welcome.module';
//[V5] And the routing configuration...
import {AppRouting} from './app.routing';
//[V5] And a navigation component...
import {AppNavigationComponent} from './app-navigation.component';

@NgModule({
	//These are the "private" pipes, components and directives.
	declarations: [
		AppComponent,
		//[V5] Our navigation component goes here, with the rest of components of this module.
		AppNavigationComponent,
	],
	//These are the pieces of functionality needed for the module, private.
	imports: [
		BrowserModule,	//This one is explicitly importing usual angular directives.
				//Root modules import this one, while feature modules import
				//CommonModule. Failure to do so will bring failure when
				//working with lazy loading stuff...
		UserDataModule,
		//[V5] The new module goes here...
		WelcomeModule,
		//[V5] As does the routing...
		AppRouting,
	],
	//These are services... 
	providers: [],
	//This is the root component of this module. Given that AppComponent is
	//bootstrapped, it is the "root module", as opposed to "feature module".
	bootstrap: [AppComponent]
})
export class AppModule { }
