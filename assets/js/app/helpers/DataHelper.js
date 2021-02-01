export class DataHelper {
    static converteDataEmTexto(date) {
        const dia = this._adicionaZeroAEsquerda(date.getDay());
        const mes = this._adicionaZeroAEsquerda(date.getMonth());
        const ano = date.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    static _adicionaZeroAEsquerda(numero) {
        return numero < 10 ? `0${numero}` : numero;
    }
}