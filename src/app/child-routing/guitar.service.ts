import {Injectable} from '@angular/core';
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

//TODO		function crap(value:any) {
//			function c(cb:any) {setTimeout( () => {cb(value);}, 2000);};
//			return new Promise(c);
//		}

		return new Promise<GuitarModel[]>( () => guitars)
			.then( (data) => {
				console.log(data);
				return data;})
	}

	public	get_guitar(id:number):Promise<GuitarModel> {

		return new Promise( () => guitars)
			.then( (data) => {return data[0];});
	}
}
