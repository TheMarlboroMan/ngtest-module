import {Injectable} from '@angular/core';

@Injectable()
export class TimeAccessService {

	private	access_date:Date=null;

	public	constructor() {
		console.log("TimeAccessService is created");
		this.access_date=new Date();
	}

	public	get_date():string {
		return this.access_date.toTimeString();
	}

}
