import {Routes, RouterModule} from '@angular/router';

import {ChildRoutingComponent} from './child-routing.component';
import {BaseComponent} from './base.component';
import {PictureComponent} from './picture.component';
import {VideoComponent} from './video.component';
import {ListComponent} from './list.component';
import {ListItemComponent} from './list-item.component';

import {AuthorizationGuardService} from '../core/authorization-guard.service';

const routes=[
	{path: '', 
		component: ChildRoutingComponent, 
		canActivate: [AuthorizationGuardService],
		children: [
			{path: '', redirectTo: 'base', pathMatch:'full'},
			{path: 'base', component: BaseComponent},
			{path: 'picture', component: PictureComponent},
			{path: 'video', component: VideoComponent},
			{path: 'list', component: ListComponent, children: [
				{path: ':id', component: ListItemComponent}
			]},
	]}
];
export const ModuleRouting=RouterModule.forChild(routes);
