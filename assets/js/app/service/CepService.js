import { HttpService } from "./HttpService.js";

export class CepService {
    constructor() {
        this._http = new HttpService();
    }

    buscar(cep) {
        return new Promise((resolve, reject) => {
            this._http.get(cep)
                .then(cepConsultado => {
                    if (cepConsultado.erro) throw new Error("CEP informafo não é valido");
                    resolve(cepConsultado);
                })
                .catch(error => reject(error));
        });
    }
}
