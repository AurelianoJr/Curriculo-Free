import { DataHelper } from "../helpers/DataHelper.js";

export class Experiencia {
  
    constructor(empresa, local, cargo, dataAdmissao, dataDemissao) {
        this._empresa = empresa;
        this._local = local;
        this._cargo = cargo;
        this._dataAdmissao = new Date(dataAdmissao);
        this._dataDemissao = new Date(dataDemissao);
    }

    get empresa() {
        return this._empresa;
    }

    get local() {
        return this._local;
    }

    get cargo() {
        return this._cargo;
    }
    
    get dataAdmissao() {
        return DataHelper.converteDataEmTexto(this._dataAdmissao);
    }

    get dataDemissao() {
        return DataHelper.converteDataEmTexto(this._dataDemissao);
    }
}