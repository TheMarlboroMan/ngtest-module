import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

	private	storage=window.sessionStorage;

	public	get(key:string):string {
	
		return this.storage.getItem(key);
	}

	public	set(key:string, value:string):void {

		this.storage.setItem(key, value);
	}

}
