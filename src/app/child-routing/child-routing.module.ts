import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {ChildRoutingComponent} from './child-routing.component';
import {BaseComponent} from './base.component';
import {PictureComponent} from './picture.component';
import {VideoComponent} from './video.component';
import {ListComponent} from './list.component';
import {ListItemComponent} from './list-item.component';
import {ModuleRouting} from './child-routing.routing';
import {GuitarService} from './guitar.service';


@NgModule({
	imports: [SharedModule, ModuleRouting],
	declarations: [
		ChildRoutingComponent, 
		BaseComponent, 
		PictureComponent,
		ListComponent,
		ListItemComponent,
		VideoComponent],
	providers: [GuitarService]
})
export class ChildRoutingModule {

}
