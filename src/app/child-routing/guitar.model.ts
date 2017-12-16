export class GuitarModel {

	public	constructor(pid:number, pbrand:string, pmodel:string) {
		
		this.id=pid;
		this.brand=pbrand;
		this.model=pmodel;
	}

	public	id:number=0;
	public	brand:string="";
	public	model:string="";
}
