import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {AboutComponent} from './about.component';

const routes=[
	{path: 'about', component: AboutComponent}
];

//[V6] Please, notice that we export with "forChild" in all feature modules
//that have their own routing system.
export const ModuleRouting=RouterModule.forChild(routes);
