export class View {
    constructor(elemento) {
        if (this.constructor == View) throw new Error("Essa classe não pode ser instanciada");
        this._elemento = elemento;
    }

    template() {
        throw new Error("O metodo deve ser implementado");
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
        // this._qrCodeGenerator(model);
        // this._alterarTitle(model);
        // //!Não deveria estar aqui
    }

    adicionaNovo(model, id, ...atributos) {
        this._elemento.innerHTML += this.template(model, id, atributos);
    }

    // _alterarTitle(model){
    //     document.querySelector("title").innerText = `Curriculo | ${model.pessoa.nome}`;
    // }

    // _qrCodeGenerator(model) {
    //     let qr = new QRious({
    //         element: document.getElementById('qr'),
    //         value: `https://api.whatsapp.com/send?phone=+55${model.contato.telefone}`,
    //         background: "transparent",
    //         foreground: "#fff"
    //     });
    // }
}