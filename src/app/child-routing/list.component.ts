import {Component, OnInit} from '@angular/core';
import {GuitarModel} from './guitar.model';
import {GuitarService} from './guitar.service';

@Component({
	templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {

	public	guitars:GuitarModel[]=[];

	public	constructor(private gs:GuitarService) {

	}

	public	ngOnInit():void {
		this.gs.get_guitars().then( (data) => {this.guitars=data;});
	}
}
