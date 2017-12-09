import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {ModuleRouting} from './about.routing';
//[V9] Our new shared module...
import {SharedModule} from '../shared/shared.module';

@NgModule({
	//[V9] We import it... Even tough it doesn't seem to make a different...
	imports: [CommonModule, ModuleRouting, SharedModule],
	exports: [AboutComponent],
	//[V9] We get rid of the providers key.
	declarations: [AboutComponent]
})
export class AboutModule {

}


