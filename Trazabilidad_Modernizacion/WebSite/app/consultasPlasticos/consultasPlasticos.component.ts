import { Component, OnInit } from "@angular/core";
import { ConsultasPlasticosServices } from "../services/consultasPlasticos.service";
import { PlasticosGrillaModel } from "../model/Grillas/PlasticosGrillaModel";
import { DetallePlasticoModel } from "../model/detallePlasticoModel";
import { ComboModel } from "../model/ComboModel";
import { Conversion } from "../model/Conversion";
import { Estado } from "../model/Estado";

@Component({
    selector: 'consultasPlasticos-component',
    templateUrl: 'app/consultasPlasticos/consultasPlasticos.component.html'
})
export class ConsultasPlasticosComponent implements OnInit {

    public listaPlastico: Array<DetallePlasticoModel>;
    public PlasticoFiltros: DetallePlasticoModel;
    public ListaPlasticoFiltros: Array<DetallePlasticoModel>;
    public ListaMarca: Array<Conversion>
    public marca: Conversion;
    public estado: Estado;
    public prdoucto: Conversion;
    public ListaProducto: Array<Conversion>
    public productoLis: Array<Conversion>
    public ListaEstados: Array<Estado>
    public listaCombo: ComboModel;
    public cantidad: number = 0;
    public concepto_descripcion: any;

    public CantidadDeRegistros: number = 0;
    public numeroPaginador: number = 0;
    public radio: number = 3;
    public PosicionActual: number = 1;
    public PaginaActual: number = 1;
    constructor(private _consultasPlasticosServices: ConsultasPlasticosServices) {
        this.listaCombo = new ComboModel;
        this.PlasticoFiltros = new DetallePlasticoModel;
        this.marca = new Conversion;
        this.estado = new Estado;
        this.prdoucto = new Conversion;

    }
    ngOnInit(): void {
        this._consultasPlasticosServices.GetListaPlastico(this.PaginaActual).subscribe(x => {
            this.listaPlastico = x.body;
            this.cantidad = this.listaPlastico.length;
        });
        this._consultasPlasticosServices.GetListaComboMarcas().subscribe(x => {
            this.ListaMarca = x.body;
        });
        this._consultasPlasticosServices.GetListaComboProductos().subscribe(x => {
            this.ListaProducto = x.body;
        });
        this._consultasPlasticosServices.GetListaCombosEstados().subscribe(x => {
            this.ListaEstados = x.body;
        });
    }
    public test: any;
    ObtenerProductosPorMarca() {
        console.log(this.marca.codigo_ORIGEN);
        for (var i = 0; i < this.ListaProducto.length; i++) {
            if (this.marca.codigo_ORIGEN === this.ListaProducto[i].codigo_ORIGEN) {
                console.log(this.ListaProducto[i]);
                this.test = this.ListaProducto[i];
            }
        }
        console.log(this.productoLis);
        console.log(this.test);
    }
    BuscarSolicitudes() {
        this.PlasticoFiltros.Estado_id = parseInt(this.estado.estId);
        this.PlasticoFiltros.Producto_id = parseInt(this.marca.codigo_DESTINO);
        this.PlasticoFiltros.SubProducto_id = this.prdoucto.codigo_DESTINO;
        console.log(this.PlasticoFiltros);
        this._consultasPlasticosServices.GetListaFiltrosPlasticos(this.PlasticoFiltros)
            .subscribe(x => {
                console.log(this.listaPlastico = x)
            });
    }
    Paginador(i: number) {
        if (i > 2 && i < this.numeroPaginador - 1) {
            this.radio = i;
        }
        if (i >= this.numeroPaginador - 2) {
            this.radio = this.numeroPaginador - 2
        }
        if (i <= 2) {
            this.radio = 3;
        }
        if (i <= this.numeroPaginador && i >= 1) {
            this.PosicionActual = i;
        }
    }
}