import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {UserDataFullComponent} from '../user-data/user-data-full.component';

const routes=[
	{path: '', redirectTo: 'user-data', pathMatch:'full'},
	{path: 'welcome', loadChildren: 'welcome/welcome.module#WelcomeModule'},
	{path: 'user-data', component: UserDataFullComponent},
	{path: 'about', loadChildren: 'about/about.module#AboutModule'}
];

export const AppRouting=RouterModule.forRoot(routes);
