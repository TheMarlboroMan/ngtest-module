import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';
import {LogoutComponent} from './logout.component';

@NgModule({
	imports: [SharedModule, FormsModule],
	declarations: [LoginComponent, LogoutComponent],
})
export class LoginModule {

}
