import { Experiencia } from "../model/Experiencia.js";

export class ExperienciaController {
    constructor(fieldset, lista) {
        this._elements = document.querySelector(fieldset).elements;
        this._listaExperienciaAcademica = lista;
        this._elementoLista = document.querySelector("[data-lista-experiencia]");
    }

    adicionaExperiencia() {
        this._listaExperienciaAcademica.adiciona(this.getExperienciaFromForm());
        this.limpaCampos();
    }

    getExperienciaFromForm() {
        return new Experiencia(this._elements.empresaExperiencia.value,
            this._elements.localExperiencia.value,
            this._elements.cargoExperiencia.value,
            this._elements.dataAdmissao.value,
            this._elements.dataDemissao.value
        );
    }

    atualizarLista() {
        this._elementoLista.classList.remove("formulario__lista--hidden");
        this._elementoLista.innerHTML = this._listaExperienciaAcademica.lista.map(experiencia => `<li>${experiencia.empresa}</li>`).join("");
    }

    limpaCampos() {
        this._elements.empresaExperiencia.value = "";
        this._elements.localExperiencia.value = "";
        this._elements.cargoExperiencia.value = "";
        this._elements.dataAdmissao.value = "";
        this._elements.dataDemissao.value = "";
    }
}