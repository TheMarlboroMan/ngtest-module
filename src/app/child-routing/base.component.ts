import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
	templateUrl: 'base.component.html'
})
export class BaseComponent implements OnInit {

	public	message:string="";

	//TODO: Read the stupid url...
	public	constructor(
		private actroute:ActivatedRoute) {

	}

	public	ngOnInit():void {

		this.actroute.paramMap.
			switchMap((params:ParamMap) => {

				let msg="";
				if(params.has("welcome")) {
					msg="Welcome to the private section!";
				}
				return Promise.resolve(msg);
			})
			.subscribe((data:string) => {
				this.message=data;
			});

	}

}
