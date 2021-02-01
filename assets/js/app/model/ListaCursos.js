export class ListaCursos {
    constructor() {
        this._listaCursos = [];
    }

    adiciona(curso) {
        this._listaCursos.push(curso);
    }

    get lista(){
        return [].concat(this._listaCursos);
    }
}