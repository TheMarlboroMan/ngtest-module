import {Injectable} from '@angular/core';

@Injectable()
export class VisitCounterService{

	private	visits:number=0;
	
	public	add_visit():void {++this.visits;}
	public	get_visits():number {return this.visits;}
}
