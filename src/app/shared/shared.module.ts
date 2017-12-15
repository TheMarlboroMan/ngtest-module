import {NgModule} from '@angular/core';

//This is for feature modules...
import {CommonModule} from '@angular/common';

//Pipes...
import {CrazyCapsPipe} from './crazy-caps.pipe'
import {DeformUserEmailPipe} from './deform-user-email.pipe';

//Components...
import {BananaComponent} from './banana.component';

@NgModule({
	declarations: [CrazyCapsPipe, DeformUserEmailPipe, BananaComponent],
	exports: [CrazyCapsPipe, DeformUserEmailPipe, BananaComponent, CommonModule],
})
export class SharedModule {

}
