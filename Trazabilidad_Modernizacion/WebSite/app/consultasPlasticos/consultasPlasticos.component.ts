﻿import { Component, OnInit } from "@angular/core";
import { ConsultasPlasticosServices } from "../services/consultasPlasticos.service";
import { PlasticosGrillaModel } from "../model/Grillas/PlasticosGrillaModel";
import { DetallePlasticoModel } from "../model/detallePlasticoModel";
import { ComboModel } from "../model/ComboModel";
import { Conversion } from "../model/Conversion";
import { Estado } from "../model/Estado";
import { PaginadorModel } from "../model/PaginadorModel";
import { DialogService } from "ng2-bootstrap-modal";
import { SeguimientoServices } from "../services/seguimiento.service";
import { SolicitudesSeguimientoModel } from "../model/SolicitudesSeguimientoModel";
import { ModalSeguimientoComponent } from "./seguimiento/modalSeguimiento.component";
import { ModalEstadoComponent } from "./estado/modalEstado.component";
import { ModalAbmComponent } from "./abm/modalAbm.component";

@Component({
    selector: 'consultasPlasticos-component',
    templateUrl: 'app/consultasPlasticos/consultasPlasticos.component.html',
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
    public paginadorModel: PaginadorModel;
    public filtros: boolean = true;
    public CantidadDeRegistros: number = 0;
    public numeroPaginador: number = 0;
    public radio: number = 3;
    public PosicionActual: number = 1;
    public PaginaActual: number = 1;
    public test: any;
    public mensaje: string = "";
    public nrotarjeta: SolicitudesSeguimientoModel;
    public Seguimiento: Array<SolicitudesSeguimientoModel>;

    constructor(private _consultasPlasticosServices: ConsultasPlasticosServices, private dialogService: DialogService, private seguimientoService: SeguimientoServices)
    {
        this.listaCombo = new ComboModel;
        this.PlasticoFiltros = new DetallePlasticoModel;
        this.marca = new Conversion;
        this.estado = new Estado;
        this.prdoucto = new Conversion;
        this.paginadorModel = new PaginadorModel;
        this.nrotarjeta = new SolicitudesSeguimientoModel();
        this.Seguimiento = new Array<SolicitudesSeguimientoModel>()
    }
    NgModule() {

    }
    ngOnInit(): void {
        this._consultasPlasticosServices.GetCantidadBotones().subscribe(x => {
            this.paginadorModel = x.body;
            this.numeroPaginador = this.paginadorModel.CantidadDeBotones;
        });
        this._consultasPlasticosServices.GetListaPlasticos(1).subscribe(x => {
            this.listaPlastico = x.body;
            this.cantidad = this.listaPlastico.length;
        });
        this._consultasPlasticosServices.GetListaComboMarcas().subscribe(x => {
            this.ListaMarca = x.body;
        });
        try {
            this._consultasPlasticosServices.GetListaCombosEstados().subscribe(x => {
                this.ListaEstados = x.body;
                //console.log(this.ListaEstados);
            });
        } catch (e) {
            console.log(e);
        }

    }

    ObtenerProductosPorMarca() {

        this._consultasPlasticosServices.GetListaComboProductos(this.marca.codigo_ORIGEN).subscribe(x => {
            this.ListaProducto = x.body;
        });
    }
   
    BuscarSolicitudes() {
        this.PlasticoFiltros.Estado_id = parseInt(this.estado.estId);
        this.PlasticoFiltros.Producto_id = parseInt(this.marca.codigo_DESTINO);
        this.PlasticoFiltros.SubProducto_id = this.prdoucto.codigo_DESTINO;

        if (this.PlasticoFiltros.Estado_id > 0
            || this.PlasticoFiltros.Producto_id > 0
            || this.PlasticoFiltros.SubProducto_id != undefined
            || this.PlasticoFiltros.BarCode_Pieza != undefined
            || this.PlasticoFiltros.Plastico_nro > 0
            || this.PlasticoFiltros.Nro_Cuenta_Plastico > 0
            || this.PlasticoFiltros.Nro_doc > 0
        ) {
            this.filtros = true;
            this.mensaje = "";
            this._consultasPlasticosServices.GetListaFiltrosPlasticos(this.PlasticoFiltros)
                .subscribe(x => {
                    //console.log(this.listaPlastico = x)
                    this.cantidad = this.listaPlastico.length;
                });
        }
        else {
            this.filtros = false;
            this.mensaje = "Debe llenar un campo como minimo "
        }
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
        this._consultasPlasticosServices.GetListaPlasticos(i).subscribe(x => {
            this.listaPlastico = x.body;
            this.cantidad = this.listaPlastico.length;
        });
    }


    showAlert(Reg_id: number, Nombre: string) {
        try {
            this.dialogService.addDialog(ModalSeguimientoComponent, { reg_id: Reg_id});

        } catch (e) {
            console.log(e);
        }
    }

    EstadoActualizar( x:any) {
        try {

            this.dialogService.addDialog(ModalEstadoComponent, { listaPlastico:x});

        } catch (e) {
            console.log(e);
        }
    }

    
    AbmEstadoActualizar(x: DetallePlasticoModel) {
        try {

            this.dialogService.addDialog(ModalAbmComponent, { listaPlastico: x, reg_id: x.Reg_id, accion: 2});

        } catch (e) {
            console.log(e);
        }
    }
    
    AbmEstadoSeguimientor(x: DetallePlasticoModel) {
        try {

            this.dialogService.addDialog(ModalAbmComponent, { listaPlastico: x, reg_id: x.Reg_id, accion: 1 });

        } catch (e) {
            console.log(e);
        }
    }
}