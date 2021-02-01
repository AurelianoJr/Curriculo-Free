import { getAtributosEnum } from "../helpers/AtributosEnum.js";
import { FieldView } from "./FieldView.js";
import { View } from "./View.js";
export class FormularioView {
    constructor() {
        this._$ = document.querySelector.bind(document);
        this._atributo = getAtributosEnum();
    }

    render() {
        this._renderPessoal();
        this._renderEndereco();
        this._renderContato();
        this._renderSkill();
        this._renderFormacao();
        this._renderExperiencia();
        this._renderCurso();
    }

    _renderPessoal() {
        const fieldsetPessoal = new FieldView(this._$("[data-fieldset-pessoa"));
        fieldsetPessoal.adicionaNovo(`Nome`, `nome`, this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldsetPessoal.adicionaNovo(`Data de Nascimento`, `nascimento`, this._atributo.TYPEDATE, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldsetPessoal.adicionaNovo(`Estado civil`, `estadoCivil`, `list="estado-civil"`, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldsetPessoal.adicionaNovo(`Naturalidade`, `naturalidade`, this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
    }

    _renderEndereco() {
        const fieldEndereco = new FieldView(this._$("[data-fieldset-endereco"));
        fieldEndereco.adicionaNovo("CEP", "cep", this._atributo.TYPETEXT, `pattern="(\\d{5})-(\\d{3})"`, `min="9"`, `maxlength="9"`, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldEndereco.adicionaNovo("Estado", "estado", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldEndereco.adicionaNovo("Cidade", "cidade", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldEndereco.adicionaNovo("Bairro", "bairro", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldEndereco.adicionaNovo("Rua", "rua", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldEndereco.adicionaNovo("Numero", "numero", this._atributo.TYPENUMBER, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
    }

    _renderContato() {
        const fieldContato = new FieldView(this._$("[data-fieldset-contato"));
        fieldContato.adicionaNovo("Telefone", "telefone", this._atributo.TYPETEL, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldContato.adicionaNovo("E-mail", "email", this._atributo.TYPEEMAIL, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
    }

    _renderSkill() {
        const fieldSkill = new FieldView(this._$("[data-fieldset-skill"));
        fieldSkill.adicionaNovo("Primeira skill", "skill1", "data-skill-1", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldSkill.adicionaNovo("Segunda skill", "skill2", "data-skill-2", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
        fieldSkill.adicionaNovo("Terceira skill", "skill3", "data-skill-3", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE, this._atributo.AUTOCOMPLETOFF);
    }

    _renderFormacao(){
        const fieldFormacao = new FieldView(this._$("[data-fieldset-formacao] div"));
        fieldFormacao.adicionaNovo("Nome do Curso", "nomeCurso", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE);
        fieldFormacao.adicionaNovo("Instituição de ensino", "instituicaoCurso", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE);
        fieldFormacao.adicionaNovo("Status", "statusCurso", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE);
        fieldFormacao.adicionaNovo("Carga horaria", "cargaHorariaCurso", this._atributo.TYPENUMBER, this._atributo.PLACEHOLDERSPACE);
        fieldFormacao.adicionaNovo("Ano de conclusão", "conclusaoCurso", this._atributo.TYPENUMBER, this._atributo.PLACEHOLDERSPACE);
    }

    _renderExperiencia(){
        const fieldExperiencia = new FieldView(this._$("[data-fieldset-experiencia] div"));
        fieldExperiencia.adicionaNovo("Empresa", "empresaExperiencia", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE);
        fieldExperiencia.adicionaNovo("Local", "localExperiencia", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE);
        fieldExperiencia.adicionaNovo("Cargo", "cargoExperiencia", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE);
        fieldExperiencia.adicionaNovo("Data admissão", "dataAdmissao", this._atributo.TYPEDATE, this._atributo.PLACEHOLDERSPACE);
        fieldExperiencia.adicionaNovo("Data demissão", "dataDemissao", this._atributo.TYPEDATE, this._atributo.PLACEHOLDERSPACE);
    }

    _renderCurso(){
        const fieldCurso = new FieldView(this._$("[data-fieldset-curso] div"));
        fieldCurso.adicionaNovo("Novo Curso", "curso", this._atributo.TYPETEXT, this._atributo.PLACEHOLDERSPACE);
        fieldCurso.adicionaNovo("Carga Horaria", "cargaHoraria", this.TYPENUMBER, this._atributo.PLACEHOLDERSPACE);
    }
}
