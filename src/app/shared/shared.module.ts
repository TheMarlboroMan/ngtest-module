import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CrazyCapsPipe} from './crazy-caps.pipe'

@NgModule({
	declarations: [CrazyCapsPipe],
	exports: [CrazyCapsPipe],
	providers: []
})
export class SharedModule {

}
