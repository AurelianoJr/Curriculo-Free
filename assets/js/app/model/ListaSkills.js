export class ListaSkills{
    constructor(){
        this._listaSkills = [];
    }

    adiciona(skill){
        this._listaSkills.push(skill);
    }

    get lista(){
        return [].concat(this._listaSkills);
    }
}