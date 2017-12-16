import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {ChildRoutingComponent} from './child-routing.component';
import {BaseComponent} from './base.component';
import {PictureComponent} from './picture.component';
import {VideoComponent} from './video.component';
import {ModuleRouting} from './child-routing.routing';

@NgModule({
	imports: [SharedModule, ModuleRouting],
	declarations: [
		ChildRoutingComponent, 
		BaseComponent, 
		PictureComponent,
		VideoComponent]
})
export class ChildRoutingModule {

}
