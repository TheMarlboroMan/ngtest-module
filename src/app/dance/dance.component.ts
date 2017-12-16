import {Component} from '@angular/core';

import {CurrentUserService} from '../core/current-user.service';
import {UselessService} from '../core/useless.service';
import {HoverItem, HoverItemFont, ItemLeave} from './animations';

class Item {
	public	constructor(val:string) {this.content=val;}
	public	hover:boolean=false;
	public	content:string="";
};

@Component({
	selector : 'dance',
	templateUrl: 'dance.component.html',
	styleUrls: ['dance.component.css'],
	animations: [HoverItem, HoverItemFont, ItemLeave]
})
export class DanceComponent {

	public	animated_items:Item[]=[];

	public	constructor(
		public cus:CurrentUserService,
		public us:UselessService) {
	}

	public	add_animated_item():void {
		if(this.animated_items.length < 3) {
			this.animated_items.push(new Item("When inserted, this was index "+(this.animated_items.length+1)+"..."));
		}
	}

	public	remove_item(index:number):void {
		this.animated_items.splice(index, 1);
	}

}
