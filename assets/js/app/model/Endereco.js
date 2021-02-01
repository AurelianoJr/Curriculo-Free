export class Endereco{

    constructor(estado, cidade, bairro, rua, numero){
        this._estado = estado;
        this._cidade = cidade;
        this._bairro = bairro;
        this._rua = rua;
        this._numero = numero;
    }

    get estado(){
        return this._estado;
    }
    
    get cidade(){
        return this._cidade;
    }

    get bairro(){
        return this._bairro;
    }

    get rua(){
        return this._rua;
    }

    get numero(){
        return this._numero
    }
}