import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DanceComponent} from './dance.component';
import {BananaComponent} from './banana.component';

//This would work, no problems...
//import {CoreModule} from '../core/core.module';

@NgModule({
//	imports: [CommonModule, CoreModule],
	imports: [CommonModule],
	declarations: [DanceComponent, BananaComponent],
	exports: [BananaComponent]
})
export class DanceModule {

}
