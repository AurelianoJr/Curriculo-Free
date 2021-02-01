import { ListaCursos } from "./app/model/ListaCursos.js";
import { ListaExperiencias } from "./app/model/ListaExperiencias.js";
import { ListaFormacoesAcademicas } from "./app/model/ListaFormacoesAcademicas.js";
import { ListaSkillController } from "./app/controller/ListaSkillController.js";

import { Profissional } from "./app/model/Profissional.js";
import { EnderecoController } from "./app/controller/EnderecoController.js";
import { FormularioView } from "./app/view/FormularioView.js";
import { PessoaController } from "./app/controller/PessoaController.js";
import { ContatoController } from "./app/controller/ContatoController.js";
import { FormacaoAcademicaController } from "./app/controller/FormacaoAcademicaController.js";
import { ExperienciaController } from "./app/controller/ExperienciaController.js";
import { FormacaoAcademicaAction } from "./app/action/FormacaoAcademicaAction.js";
import { PessoaAction } from "./app/action/PessoaAction.js";
import { EnderecoAction } from "./app/action/EnderecoAction.js";
import { ExperienciaAction } from "./app/action/ExperienciaAction.js";
import { CursoController } from "./app/controller/CursoController.js";
import { CursoAction } from "./app/action/CursoAction.js";



const $ = document.querySelector.bind(document);

/* -----------------------------------*/
/* ---------->>> FORMULARIO <<<-----------*/
/* -----------------------------------*/
const formulario = new FormularioView();
formulario.render();


/* -----------------------------------*/
/* ---------->>> PESSOA <<<-----------*/
/* -----------------------------------*/
const pessoaController = new PessoaController("[data-fieldset-pessoa]");
const pessoaAction = new PessoaAction();
pessoaAction.adicionarFoto(pessoaController);


/* -----------------------------------*/
/* ---------->>> ENDEREÇO <<<-----------*/
/* -----------------------------------*/
const enderecoController = new EnderecoController("[data-fieldset-endereco]");
const enderecoAction = new EnderecoAction();
enderecoAction.adicionaMascaraCep();
enderecoAction.buscaEnderecoApartirDoCep(enderecoController);


/* -----------------------------------*/
/* ---------->>> CONTATO <<<-----------*/
/* -----------------------------------*/
const contatoController = new ContatoController("[data-fieldset-contato");


/* -----------------------------------*/
/* ---------->>> SKILL <<<-----------*/
/* -----------------------------------*/
const listaSkill = new ListaSkillController();


/* -----------------------------------------------*/
/* ---------->>> FORMAÇÃO ACADEMICA <<<-----------*/
/* -----------------------------------------------*/
const listaFormacaoAcademica = new ListaFormacoesAcademicas();
const formacaoAcademicaController = new FormacaoAcademicaController("[data-fieldset-formacao]", listaFormacaoAcademica);
const formacaoAcademicaAction = new FormacaoAcademicaAction(formacaoAcademicaController);
formacaoAcademicaAction.adicionaFormacao();

/* -----------------------------------------------*/
/* ---------->>> EXPERIÊNCIA <<<-----------*/
/* -----------------------------------------------*/
const listaExperiencia = new ListaExperiencias();
const experienciaController = new ExperienciaController("[data-fieldset-experiencia]", listaExperiencia);
const experienciaAction = new ExperienciaAction(experienciaController);
experienciaAction.adicionaExperiencia();


/* -----------------------------------------------*/
/* ---------->>> CURSO <<<-----------*/
/* -----------------------------------------------*/
const listaCurso = new ListaCursos();
const cursoController = new CursoController("[data-fieldset-curso]", listaCurso);
const cursoAction = new CursoAction(cursoController);
cursoAction.adicionaCurso();

document.getElementById("botao-submit").addEventListener("click", (event) => {
    event.preventDefault();

    const profissional = new Profissional(
        pessoaController.getPessoaFromForm(),
        contatoController.getContatoFromForm(),
        enderecoController.getEnderecoFromForm(),
        listaSkill.getAllSkillFromForm(),
        listaFormacaoAcademica,
        listaExperiencia,
        listaCurso
    );

    document.querySelector("input[type=file").value = "";

    let novaPaginaa = window.open("../../curriculo.html", "_black");
    novaPaginaa.paramTeste = profissional;
});
