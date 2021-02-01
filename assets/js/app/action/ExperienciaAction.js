export class ExperienciaAction {
    constructor(experienciaController) {
        this._$ = document.querySelector.bind(document);
        this._experienciaController = experienciaController;
    }

    adicionaExperiencia () {
        this._$("[data-experiencia-button]").addEventListener("click", (event) => {
            event.preventDefault();
            this._experienciaController.adicionaExperiencia();
            this._experienciaController.atualizarLista();
        });
    }
}