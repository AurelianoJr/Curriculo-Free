import { Contato } from "../model/Contato.js";

export class ContatoController{
    constructor(fieldset){
        this._elements = document.querySelector(fieldset).elements;
    }

    getContatoFromForm(){
        return new Contato(this._elements.telefone.value, this._elements.email.value);
    }
}