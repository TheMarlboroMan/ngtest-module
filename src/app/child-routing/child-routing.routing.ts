import {Routes, RouterModule} from '@angular/router';

import {ChildRoutingComponent} from './child-routing.component';
import {BaseComponent} from './base.component';
import {PictureComponent} from './picture.component';
import {VideoComponent} from './video.component';


const routes=[
	{path: '', component: ChildRoutingComponent, children: [
		{path: '', component: BaseComponent},
		{path: 'picture', component: PictureComponent},
		{path: 'video', component: VideoComponent},
		]
	}
];
export const ModuleRouting=RouterModule.forChild(routes);
