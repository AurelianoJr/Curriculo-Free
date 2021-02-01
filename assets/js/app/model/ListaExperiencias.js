export class ListaExperiencias{
     constructor(){
         this._listaExperiencias = [];
     }

     adiciona(experiencia){
         this._listaExperiencias.push(experiencia);
     }

     get lista(){
         return [].concat(this._listaExperiencias);
     }
}