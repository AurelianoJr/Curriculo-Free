export class PessoaAction {

    constructor() {
        this._$ = document.querySelector.bind(document);
    }

    adicionarFoto(pessoaController) {
        this._$("#foto").addEventListener("change", () => {
            pessoaController.aplicarImagem(this._$("#foto"), this._$("[data-imagem"));
            document.querySelector(".formulario__botao").classList.add("formulario__botao--active");
            document.querySelector("[data-imagem]").classList.add("formulario__file-image--ativo");
        });
    }
}
