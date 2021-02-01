export class Skill {
    
    constructor(nome, porcentagem) {
        this._nome = nome;
        this._porcentagem = porcentagem;
    }

    get nome() {
        return this._nome;
    }

    get porcentagem() {
        return this._porcentagem;
    }
}