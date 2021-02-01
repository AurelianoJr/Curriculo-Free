export class Curso{
   
    constructor(nome, cargaHoraria){
        this._nome = nome;
        this._cargaHoraria = cargaHoraria;
    }

    get nome(){
        return this._nome;
    }

    get cargaHoraria(){
        return this._cargaHoraria;
    }
}