import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {UserDataFullComponent} from './user-data/user-data-full.component';
import {DanceComponent} from './dance/dance.component';
import {LoginComponent} from './login/login.component';

const routes=[
	{path: '', redirectTo: 'user-data', pathMatch:'full'},
	{path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule'},
	{path: 'user-data', component: UserDataFullComponent},
	{path: 'about', loadChildren: './about/about.module#AboutModule'},
	{path: 'child-routing', loadChildren: './child-routing/child-routing.module#ChildRoutingModule'},
	{path: 'dance', component: DanceComponent},
	{path: 'login', component: LoginComponent},
];

export const AppRouting=RouterModule.forRoot(routes);
