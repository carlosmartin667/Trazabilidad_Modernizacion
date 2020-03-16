export class Producto {
    public id: string;
    public nombreProducto: string;
    public marcaProductoId: string;
    public codigoBco: string;
    public codigo_SOB: string;

    constructor(codigo: string, nombreProducto: string) {
        this.id = codigo;
        this.nombreProducto = nombreProducto;
    }

}