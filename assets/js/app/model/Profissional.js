export class Profissional{
    constructor(pessoa, contato, endereco, skills, formacoesAcademicas, experiencias, cursos){
        this._pessoa = pessoa;
        this._contato = contato;
        this._endereco = endereco;
        this._skills = skills;
        this._formacoesAcademicas = formacoesAcademicas;
        this._experiencias = experiencias;
        this._cursos = cursos;
    }

    get pessoa(){
        return this._pessoa;
    }
    get contato(){
        return this._contato;
    }
    get endereco(){
        return this._endereco;
    }
    get skills(){
        return this._skills;
    }
    get formacoesAcademicas(){
        return this._formacoesAcademicas;
    }
    get experiencias(){
        return this._experiencias;
    }
    get cursos(){
        return this._cursos;
    }
}