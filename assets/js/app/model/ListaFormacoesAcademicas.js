export class ListaFormacoesAcademicas{
    constructor(){
        this._listaFormacoesAcademicas = [];
    }

    adiciona(formacaoAcademica){
        this._listaFormacoesAcademicas.push(formacaoAcademica);
    }

    get lista(){
        return [].concat(this._listaFormacoesAcademicas);
    }
}