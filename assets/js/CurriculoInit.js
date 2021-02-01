import { CurriculoView } from "./app/view/CurriculoView.js";

const profissional = window.paramTeste;
if (profissional) {
    new CurriculoView(document.getElementById("root")).update(profissional);
    document.querySelector("[data-foto-curriculo]").src = profissional.pessoa.foto;
    containerQrCodeRenderizado = true;
    qrCodeRenderStatus(profissional.contato.telefone);

    // window.print();
}