import { Skill } from "../model/Skill.js";

export class SkillController {
    
    constructor() {
        this._$ = document.querySelector.bind(document);
    }

    getSkillFromForm(skill, porcentagem){
        return new Skill(this._$(skill).value, porcentagem);
    }
}
