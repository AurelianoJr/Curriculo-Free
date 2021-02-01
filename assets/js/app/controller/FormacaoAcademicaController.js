"use strict";

import { FormacaoAcademica } from "../model/FormacaoAcademica.js";

export class FormacaoAcademicaController {

    constructor(elemento, lista) {
        this._$ = document.querySelector.bind(document);
        this._elements = document.querySelector(elemento).elements;
        this._listaFormacaoAcademica = lista;
        this._elementoLista = document.querySelector("[data-lista-formacao]");
    }

    adicionaFormacaoAcademica() {
        this._listaFormacaoAcademica.adiciona(this.getFormacaoAcademicaFromForm());
        this.limpaFormacaoAcademica();
    }

    getFormacaoAcademicaFromForm() {
        return new FormacaoAcademica(
            this._elements.nomeCurso.value,
            this._elements.instituicaoCurso.value,
            this._elements.statusCurso.value,
            this._elements.cargaHorariaCurso.value,
            this._elements.conclusaoCurso.value
        );
    }

    atualizarLista() {
        this._elementoLista.classList.remove("formulario__lista--hidden");
        this._elementoLista.innerHTML = this._listaFormacaoAcademica.lista.map(formacao => `<li>${formacao.curso}</li>`).join("");
    }

    limpaFormacaoAcademica() {
        this._elements.nomeCurso.value = "";
        this._elements.instituicaoCurso.value = "";
        this._elements.statusCurso.value = "";
        this._elements.cargaHorariaCurso.value = "";
        this._elements.conclusaoCurso.value = "";
    }
}