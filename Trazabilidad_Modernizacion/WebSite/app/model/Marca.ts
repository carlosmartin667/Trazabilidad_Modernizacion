export class Marca {
    constructor(id?: string, codigoSOB?: string, descripcion?: string) {
        this.id = parseInt(id);
        this.codigoSOB = codigoSOB;
        this.nombreMarca = descripcion;
    }
    public id: number;
    public nombreMarca: string;
    public codigoMarca: string;
    public codigoBanco: string;
    public codigoSOB: string;  
}