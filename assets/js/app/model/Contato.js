export class Contato{
    constructor(telefone, email){
        this._telefone = telefone;
        this._email = email;
    }

    get telefoneFormatado(){
        return this._telefone;
    }

    get telefone(){
        let telefone = this._telefone;
        telefone = telefone.replace("(", "");
        telefone = telefone.replace(")", "");
        telefone = telefone.replace(" ", "");
        telefone = telefone.replace(".", "");
        telefone = telefone.replace("-", "");
        return telefone;
    }

    get email(){
        return this._email;
    }
}