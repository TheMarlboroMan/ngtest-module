import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome.component';

const routes=[
	{path: '', component: WelcomeComponent}
];
export const ModuleRouting=RouterModule.forChild(routes);
