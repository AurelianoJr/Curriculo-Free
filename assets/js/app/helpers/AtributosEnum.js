class AtributosEnum {
    constructor() {
        this.PLACEHOLDERSPACE = `placeholder=" "`;
        this.AUTOCOMPLETOFF = `autocomplet="off"`;
        this.TYPETEXT = `type="text"`;
        this.TYPEDATE = `type="date"`;
        this.TYPENUMBER = `type="number"`;
        this.TYPETEL = `type="tel"`;
        this.TYPEEMAIL = `type="email"`;
    }
}

let enumAtributos = new AtributosEnum();
Object.freeze(enumAtributos);
export function getAtributosEnum() {
    return enumAtributos;
}