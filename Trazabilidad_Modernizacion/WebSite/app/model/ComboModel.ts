import { Conversion } from "./Conversion";
import { Estado } from "./Estado";

export class ComboModel {
    constructor() {
        this.marcaConversion = new Array <Conversion>();
        this.productoConversion = new Array < Conversion>();
        this.marcaEstados = new Array< Estado>(); 
    }
    public productoConversion: Array< Conversion>;
    public marcaConversion: Array<Conversion>;
    public marcaEstados: Array< Estado>;
}