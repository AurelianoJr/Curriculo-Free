export class FormacaoAcademica{
    constructor(curso, instituicao, status, cargaHoraria, termino){
        this._curso = curso;
        this._instituicao = instituicao;
        this._status = status;
        this._cargaHoraria = cargaHoraria;
        this._termino = termino;
    }

    get curso(){
        return this._curso;
    }

    get instituicao(){
        return this._instituicao;
    }

    get status(){
        return this._status;
    }

    get cargaHoraria(){
        return this._cargaHoraria;
    }

    get termino(){
        return this._termino;
    }
}