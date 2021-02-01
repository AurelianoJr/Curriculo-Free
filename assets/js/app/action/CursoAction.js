export class CursoAction{
    constructor(cursoController) {
        this._$ = document.querySelector.bind(document);
        this._cursoController = cursoController;
    }

    adicionaCurso() {
        this._$("[data-curso-button]").addEventListener("click", (event) => {
            event.preventDefault();
            this._cursoController.adicionaCurso();
            this._cursoController.atualizarLista();
        });
    }
}