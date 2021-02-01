export class FormacaoAcademicaAction {
    constructor(formacaoController) {
        this._$ = document.querySelector.bind(document);
        this._formacaoController = formacaoController;
    }

    adicionaFormacao() {
        this._$("[data-formacao-button]").addEventListener("click", (event) => {
            event.preventDefault();
            this._formacaoController.adicionaFormacaoAcademica();
            this._formacaoController.atualizarLista();
        });
    }
}
