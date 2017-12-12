import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DanceComponent} from './dance.component';
import {BananaComponent} from './banana.component';

@NgModule({
	imports: [CommonModule],
	declarations: [DanceComponent, BananaComponent],
	exports: [BananaComponent]
})
export class DanceModule {

}
