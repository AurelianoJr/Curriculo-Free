import { Pessoa } from "../model/Pessoa.js";

export class PessoaController {

    constructor(fieldset) {
        this._elements = document.querySelector(fieldset).elements;
    }

    getPessoaFromForm() {
        return new Pessoa(
            this._elements.nome.value,
            "068.221.545-74",
            this._elements.nascimento.value,
            this._elements.estadoCivil.value,
            "B",
            this._elements.naturalidade.value,
            URL.createObjectURL(this._elements.foto.files[0])
        );
    }

    aplicarImagem(inputFoto, elementoExibicao) {
        URL.revokeObjectURL(inputFoto.files[0]);
        elementoExibicao.src = URL.createObjectURL(inputFoto.files[0]);
        document.querySelector(".formulario__botao").classList.add("formulario__botao--active");
        document.querySelector("[data-imagem]").classList.add("formulario__file-image--ativo");
    }
}