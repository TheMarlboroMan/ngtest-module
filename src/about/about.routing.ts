import {Routes, RouterModule} from '@angular/router';

//The components we are going to route...
import {AboutComponent} from './about.component';

//[V6] We use the empty route. 
const routes=[
	{path: '', component: AboutComponent}
];

//[V6] Please, notice that we export with "forChild" in all feature modules
//that have their own routing system.
export const ModuleRouting=RouterModule.forChild(routes);
