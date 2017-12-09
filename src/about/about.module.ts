import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {ModuleRouting} from './about.routing';

@NgModule({
	imports: [CommonModule, ModuleRouting],
	exports: [AboutComponent],
	providers: [],
	declarations: [AboutComponent]
})
export class AboutModule {

}


