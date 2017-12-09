import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {WelcomeComponent} from '../welcome/welcome.component';
import {UserDataFullComponent} from '../user-data/user-data-full.component';

const routes=[
	{path: '', redirectTo: 'welcome', pathMatch:'full'},
	{path: 'welcome', component: WelcomeComponent},
	{path: 'user-data', component: UserDataFullComponent},

//[V6] Here's where the magic happens... We lazy load the module.
//To do that, we use "loadChildren" (instead of "component") and give
//a full path to the file followed by the module class name separated by #.
//If you are clever you will notice that we are loading the Module and not
//the component... How does that even work? Well, the module has its own 
//routing component :D.

	{path: 'about', loadChildren: 'about/about.module#AboutModule'}
];

export const AppRouting=RouterModule.forRoot(routes);
