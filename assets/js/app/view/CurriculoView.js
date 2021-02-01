import { View } from "./View.js";

export class CurriculoView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return ` 
            <section class="curriculo">
            <article class="lateral">
                <section class="faixa">
                    <img class="faixa__imagem" data-foto-curriculo alt="Foto ${model.pessoa.nome}" />
                    <h1 class="faixa__nome">${model.pessoa.nome}</h1>
                </section>

                <section class="detalhe">
                    <h2 class="detalhe__titulo">Dados Pessoais</h2>
                    <ul class="detalhe__lista">
                        <li class="detalhe__item">
                            <i class="detalhe__icone fas fa-user"></i>
                            Nascimento: ${model.pessoa.dataNascimento}
                        </li>
                        <li class="detalhe__item">
                            <i class="detalhe__icone fas fa-calendar-day"></i>
                            Estado Civil: ${model.pessoa.estadoCivil}
                        </li>
                        <li class="detalhe__item">
                            <i class="detalhe__icone fas fa-map-marker-alt"></i>
                            Naturalidade: ${model.pessoa.naturalidade}
                        </li>
                    </ul>
                </section>

                <section class="detalhe">
                    <h2 class="detalhe__titulo">Endereço</h2>
                    <ul class="detalhe__lista">
                        <li class="detalhe__item">
                            <i class="detalhe__icone fas fa-archway"></i>
                            Cidade: ${model.endereco.cidade}
                        </li>
                        <li class="detalhe__item">
                            <i class="detalhe__icone fas fa-map-marked-alt"></i>
                            Bairro: ${model.endereco.bairro}
                        </li>
                        <li class="detalhe__item">
                            <i class="detalhe__icone fas fa-road"></i>
                            ${model.endereco.rua}
                        </li>
                        <li class="detalhe__item">
                            <i class="detalhe__icone fas fa-home"></i>
                            Número: ${model.endereco.numero}
                        </li>
                    </ul>
                </section>

                <section class="detalhe">
                    <h2 class="detalhe__titulo">Telefone</h2>
                    <ul class="detalhe__lista">
                        <li class="detalhe__item">
                            <i class="detalhe__icone fas fa-phone-square-alt"></i>
                            <a href="https://api.whatsapp.com/send?phone=+55${model.contato.telefone}">${model.contato.telefoneFormatado}</a>
                        </li>
                        <li class="detalhe__item">
                            <i class="detalhe__icone fas fa-envelope"></i>
                            <a href="mailto:${model.contato.email}">${model.contato.email}</a>
                        </li>
                    </ul>
                </section>

                <section class="detalhe">
                    <h2 class="detalhe__titulo">Skills</h2>
                    <ul class="detalhe__lista">
                        ${model.skills.lista.map(skill =>`<li class="detalhe__item skill skill--${skill.porcentagem}">${skill.nome}</li>`).join('')}
                    </ul>
                </section>

                <canvas class="qrcode" id="qr"></canvas>
            </article>
            <article class="centro">
                <section class="informacao">
                    <h2 class="informacao__titulo">
                        <i class="fas fa-user-graduate"></i>
                        Formação Acadêmica
                    </h2>
                    ${model.formacoesAcademicas.lista.map(formacao => 
                        `<ul class="informacao__lista">
                            <li class="informacao__item">Curso: ${formacao.curso}</li>
                            <li class="informacao__item">Instituição: ${formacao.instituicao}</li>
                            <li class="informacao__item">Status: ${formacao.status}</li>
                            ${formacao.termino ? `<li class="informacao__item">Previsão de termino:${formacao.termino} </li>` : ""}
                        </ul>`
                    ).join('')}
                </section>

                <section class="informacao">
                    <h2 class="informacao__titulo">
                        <i class="fas fa-user-tie"></i>
                        Experiência
                    </h2>

                    ${model.experiencias.lista.map(experiencia => 
                        `<ul class="informacao__lista">
                            <li class="informacao__item">Empresa: ${experiencia.empresa}</li>
                            <li class="informacao__item">Local: ${experiencia.local}</li>
                            <li class="informacao__item">Cargo: ${experiencia.cargo}</li>
                            <li class="informacao__item">Data Admissão: ${experiencia.dataAdmissao}</li>
                            <li class="informacao__item">Data Demissão: ${experiencia.dataDemissao}</li>
                        </ul>`
                    ).join('')}
                </section>

                <section class="informacao">
                    <h2 class="informacao__titulo">
                        <i class="fas fa-chalkboard-teacher"></i>
                        Cursos e Treinamentos
                    </h2>
                    <ul class="informacao__lista">
                        ${model.cursos.lista.map((curso, index) => index < 4 ? `<li class="informacao__item">${curso.nome} - ${curso.cargaHoraria}h</li>` : null
                        ).join('')}
                    </ul>
                </section>
            </article>
        </section>`;
    }
}