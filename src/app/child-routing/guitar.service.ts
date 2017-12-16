import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/delay';
import {GuitarModel} from './guitar.model';


const guitars:GuitarModel[]=[
		new GuitarModel(1, "Schecter", "007 Elite"),
		new GuitarModel(2, "Steinberger", "Spirit"),
		new GuitarModel(3, "Jackson", "Performer PS2"),
		new GuitarModel(4, "Ibanez", "RG570"),
		new GuitarModel(5, "Schecter", "C-7"),
		new GuitarModel(6, "Agile", "Intrepid"),
		new GuitarModel(7, "Takamine", "AC"),
		new GuitarModel(8, "Dallas", "NA"),
		new GuitarModel(9, "Sonora", "Flamenco"),
];

@Injectable()
export class GuitarService {


	public	get_guitars():Promise<GuitarModel[]> {

		//Much more terse.
		return Observable.of(guitars).delay(1000).toPromise();
	}

	public	get_guitar(id:number):Promise<GuitarModel> {

		//TODO: How do we guard against invalid ids????

		let prom=Promise.resolve(guitars)
			.then( (data) => data.filter( (val) => {return val.id==id;}))
			.then( (data) => {if(data.length) return data[0]; else return null;})

		return Observable.fromPromise(prom).delay(1000).toPromise();
	}
}
