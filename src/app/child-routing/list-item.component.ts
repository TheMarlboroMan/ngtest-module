import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {GuitarService} from './guitar.service';
import {GuitarModel} from './guitar.model';

@Component({
	templateUrl: 'list-item.component.html'
})
export class ListItemComponent implements OnInit {

	private current:GuitarModel=null;

	public	constructor(
		private actroute:ActivatedRoute,
		private	gs:GuitarService
	){

	}

	public	ngOnInit():void {

		//Remember, we are subscribing to an observable here: this will execute
		//every time this changes!.
		this.actroute.paramMap.
			switchMap((params:ParamMap) => {
				this.current=null;	//So everytime the component reloads we show "loading".
				return this.gs.get_guitar(parseInt(params.get('id'), 10));
			})
			.subscribe((data:GuitarModel) => {
				if(!data) alert("Something failed, did you tamper with the url?");
				else this.current=data;
			});
	}

}
