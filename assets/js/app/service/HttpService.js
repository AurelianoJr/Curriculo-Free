export class HttpService {

    _handleErrors(response) {
        if (response.ok) return response;
        throw new Error(`Erro ao realizar requisição. \n ${response.statusText}`);
    }

    async get(url) {
        const resposta = await fetch(url);
        const respostaVerifiada = this._handleErrors(resposta);
        return respostaVerifiada.json();
    }

    post(url, dado) {
        return fetch(url, {
            headers: { 'Content-type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(dado)
        })
            .then(resposta => this._handleErrors(resposta));
    }
}