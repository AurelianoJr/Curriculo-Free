import { ListaSkills } from "../model/ListaSkills.js";
import { SkillController } from "../controller/SkillController.js";

export class ListaSkillController {
    constructor() {
        
    }

    getAllSkillFromForm() {
        const listaSkill = new ListaSkills();
        const skillController = new SkillController();

        const skill1 = skillController.getSkillFromForm("[data-skill-1]", 80);
        const skill2 = skillController.getSkillFromForm("[data-skill-2]", 70);
        const skill3 = skillController.getSkillFromForm("[data-skill-3]", 95);


        listaSkill.adiciona(skill1);
        listaSkill.adiciona(skill2);
        listaSkill.adiciona(skill3);

        return listaSkill;
    }
}