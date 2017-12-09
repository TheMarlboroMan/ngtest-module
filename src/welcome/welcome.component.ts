//[V5] A new file, just an empty class.
import {Component} from '@angular/core';

//[V5] Because this will go into a router we don't care about the selector.
@Component({
	templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
	public show_lorem_ipsum:boolean=true;
}
