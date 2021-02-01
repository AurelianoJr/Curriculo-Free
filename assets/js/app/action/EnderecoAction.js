import { EnderecoController } from "../controller/EnderecoController.js";

export class EnderecoAction {

    constructor() {
        this._$ = document.getElementById.bind(document);
        this._testCep = new RegExp(/^\d{5}$\b/);
        this._campoCep = this._$("input-cep");
    }
    
    buscaEnderecoApartirDoCep(enderecoController) {
        this._campoCep.addEventListener("blur", (event) => {
            const cep = event.target;
            console.log(cep.checkValidity());
            if (cep.value.length > 0 && cep.checkValidity()) enderecoController.preencheEnderecoPorCep();

            if (cep.value.length == 0) enderecoController.limparFormEndereco();
        });
    }

    adicionaMascaraCep() {
        this._campoCep.addEventListener("keydown", (event) => {
            if (this._testCep.test(event.target.value) && event.target.key != 8)  event.target.value += "-";
        });
    }
}