import { Endereco } from "../model/Endereco.js";
import { CepService } from "../service/CepService.js";

export class EnderecoController {

    constructor(fieldset) {
        this._elements = document.querySelector(fieldset).elements;
    }

    preencheEnderecoPorCep() {
        const cep = this._elements.cep.value.replace("-", "");
        new CepService().buscar(`https://viacep.com.br/ws/${cep}/json/`)
            .then(cepResposta => {
                const endereco = this._createEnderecoFromJson(cepResposta);
                this._setEnderecoToForm(endereco);
                this._travarInputs();
            })
            .catch(error => {
                console.log(error)
                alert("Não foi possivel consultar CEP");
                this._elements.cep.focus();
            });
    }

    _ehValido(response){
        if(response.error) throw new Error("Cep consultado é invalido");
    }

    _setEnderecoToForm(endereco) {
        this._elements.estado.value = endereco.estado;
        this._elements.cidade.value = endereco.cidade;
        this._elements.bairro.value = endereco.bairro;
        this._elements.rua.value = endereco.rua;
    }

    getEnderecoFromForm() {
        return new Endereco(this._elements.estado.value, this._elements.cidade.value, this._elements.bairro.value, this._elements.rua.value, this._elements.numero.value);
    }

    _travarInputs() {
        for(let i = 0; i < this._elements.length; i++){
            if(this._elements[i] == this._elements.cep || this._elements[i].value.length == 0) continue;
            this._elements[i].setAttribute("readonly", true);
        }
    }

    _createEnderecoFromJson(json) {
        return new Endereco(json.uf, json.localidade, json.bairro, json.logradouro, "");
    }

    limparFormEndereco() {
        this._setEnderecoToForm(new Endereco("", "", "", "", ""));
    }
}