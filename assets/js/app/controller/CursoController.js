import { Curso } from "../model/Curso.js";

export class CursoController{
    constructor(elemento, lista) {
        this._$ = document.querySelector.bind(document);
        this._elements = document.querySelector(elemento).elements;
        this._listaCurso = lista;
        this._elementoLista = document.querySelector("[data-lista-curso]");
    }

    adicionaCurso() {
        this._listaCurso.adiciona(this.getCursoFromForm());
        this.limpaCurso();
    }

    getCursoFromForm() {
        return new Curso(this._elements.curso.value, this._elements.cargaHoraria.value);
    }

    atualizarLista() {
        this._elementoLista.classList.remove("formulario__lista--hidden");
        this._elementoLista.innerHTML = this._listaCurso.lista.map(curso => `<li>${curso.nome}</li>`).join("");
    }

    limpaCurso() {
        this._elements.curso.value = "";
        this._elements.cargaHoraria.value = "";
    }
}