import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {WelcomeComponent} from '../welcome/welcome.component';
import {UserDataFullComponent} from '../user-data/user-data-full.component';

const app_routes=[
	{path: '', redirectTo: 'welcome', pathMatch:'full'},
	{path: 'welcome', component: WelcomeComponent},
	{path: 'user-data', component: UserDataFullComponent}
];

export const AppRouting:ModuleWithProviders=RouterModule.forRoot(app_routes);
