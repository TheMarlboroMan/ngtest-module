import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Application components...
import { AppComponent } from './app.component';
import {UserDataModule} from '../user-data/user-data.module';
import {WelcomeModule} from '../welcome/welcome.module';
//[V6] We DON'T import the module!. We are trying to lazy load it!!!.
//import {AboutModule} from '../about/about.module';
import {AppRouting} from './app.routing';
import {AppNavigationComponent} from './app-navigation.component';

@NgModule({
	//These are the "private" pipes, components and directives.
	declarations: [
		AppComponent,
		AppNavigationComponent,
	],
	//These are the pieces of functionality needed for the module, private.
	imports: [
		BrowserModule,	//This one is explicitly importing usual angular directives.
				//Root modules import this one, while feature modules import
				//CommonModule. Failure to do so will bring failure when
				//working with lazy loading stuff...
		UserDataModule,
		WelcomeModule,
		AppRouting,
		//[V6] Again, we don't do this... We try to lazy load!.
		//AboutModule,
	],
	//These are services... 
	providers: [],
	//This is the root component of this module. Given that AppComponent is
	//bootstrapped, it is the "root module", as opposed to "feature module".
	bootstrap: [AppComponent]
})
export class AppModule { }
