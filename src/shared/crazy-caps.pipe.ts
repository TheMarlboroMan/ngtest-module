import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'crazyCaps'
})
export class CrazyCapsPipe implements PipeTransform {
	public transform(input:string):string {

		let result:string='';
		for(let i=0; i<input.length; ++i) {result+= i%2 ? input[i].toUpperCase() : input[i].toLowerCase();}
		return result;
	}
}
