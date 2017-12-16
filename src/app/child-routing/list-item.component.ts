import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

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

	//TODO: This must be another method.
	public	ngOnInit():void {

		//TODO: THIS IS NOT GOING TO WORK... AND YOU KNOW IT!!!!!.
		this.current=null;	//So everytime the component reloads we show "loading".

		this.actroute.paramMap.
			switchMap((params:ParamMap) => {
				console.log("INSIDE!!");
				return this.gs.get_guitar(parseInt(params.get('id'), 10));
			})
			.subscribe((data:GuitarModel) => {this.current=data;});
	}

}
