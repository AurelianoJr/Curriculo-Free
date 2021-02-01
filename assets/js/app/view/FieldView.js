import { View } from "./View.js";

export class FieldView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(nome, id, atributos){
        return `
            <label class="field" for="input-${id}">
                <input class="field__input" id="input-${id}" name="${id}" ${atributos.join(" ")} type="text"/>
                <p class="field__label">${nome}</p>
            </label>
        `;
    }
}