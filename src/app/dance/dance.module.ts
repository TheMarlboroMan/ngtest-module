import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {DanceComponent} from './dance.component';

@NgModule({
	imports: [SharedModule],
	declarations: [DanceComponent],
})
export class DanceModule {

}
