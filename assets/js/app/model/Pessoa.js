import { DataHelper } from "../helpers/DataHelper.js";

export class Pessoa {

    constructor(nome, cpf, dataNascimento, estadoCivil, habilitacao, naturalidade, foto) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = new Date(dataNascimento);
        this._estadoCivil = estadoCivil;
        this._habilitacao = habilitacao;
        this._naturalidade = naturalidade;
        this._foto = foto;
    }

    set foto(foto) {
        this._foto = foto;
    }

    set nome(nome) {
        this._nome = nome
    }

    get nome() {
        return this._nome;
    }

    get cpf() {
        return this._cpf;
    }

    get dataNascimento() {
        return DataHelper.converteDataEmTexto(this._dataNascimento);
    }

    get estadoCivil() {
        return this._estadoCivil;
    }

    get habilitacao() {
        return this._habilitacao;
    }

    get naturalidade() {
        return this._naturalidade;
    }

    get foto() {
        return this._foto;
    }
}