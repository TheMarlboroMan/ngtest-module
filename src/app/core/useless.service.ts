import {Injectable} from '@angular/core';

@Injectable()
export class UselessService {

	private		data:string="Default";

	public		set_data(val:string):void {
		this.data=val;
	}

	public		get_data():string {
		return this.data;
	}

}
