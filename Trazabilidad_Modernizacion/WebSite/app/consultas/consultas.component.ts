import { Component, OnInit } from '@angular/core';
import { ConsultaTarjetaModel, DatosTarjeta } from '../model/ConsultaTarjetaModel';
import { Estado } from '../model/Estado';
import { Marca } from '../model/Marca';
import { MarcaService } from '../services/marca.service';
import { error } from '@angular/compiler/src/util';
import { EstadoService } from '../services/estado.service';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/Producto';
import { SucursalService } from '../services/sucursal.service';
import { GrupoAfinidadService } from '../services/gaf.service';
import { GrupoAfinidad } from '../model/Gaf';
import { ConversionService } from '../services/conversion.service';
import { Conversion } from '../model/Conversion';
import { ModalidadEntrega } from '../model/ModalidadEntrega';
import { ModalidadEntregaService } from '../services/modalidadEntrega';
import { PlasticosGrillaModel } from '../model/Grillas/PlasticosGrillaModel';

@Component({
    selector: 'consultas-component',
    templateUrl: 'app/consultas/consultas.component.html'
})
export class ConsultasComponent implements OnInit {
    public modelConsulta: ConsultaTarjetaModel = new ConsultaTarjetaModel();
    public modelGrillaPlasticos: PlasticosGrillaModel = new PlasticosGrillaModel();
    public modelMarcas: Array<Marca>;
    public modelProductos: Array<Producto>;
    public modelGrupoAfinidad: Array<GrupoAfinidad>;
    public modelEstados: Array<Estado>;
    public modelOrigenEmbozo: Array<Conversion>;
    public modelMotivoImpresion: Array<Conversion>;
    public modelModalidadesEntrega: Array<ModalidadEntrega>;
    public modelTipoDOC: Array<Conversion>;
    public modelCanalOrigen: Array<Conversion>;
    public sucursal_descripcion: string;

    public validaciones: Array<string> = new Array<string>();
    public msg: string;
    constructor(
        private _marcaService: MarcaService,
        private _estadoService: EstadoService,
        private _productoService: ProductoService,
        private _sucursalService: SucursalService,
        private _grupoAfinidadService: GrupoAfinidadService,
        private _conversionService: ConversionService,
        private _modalidadEntregaService: ModalidadEntregaService) {
    }

    ngOnInit(): void {

        this._marcaService.get()
            .subscribe(model => {
                this.modelMarcas = model.body;
            }, error => {
                this.msg = <any>error;
            });

        this._estadoService.obtenerEstados(6)//TODO: AGREGAR PARAMETRO AL CONFIG?
            .subscribe(model => {
                this.modelEstados = model.body
            }, error => {
                this.msg = <any>error
            });
        this._grupoAfinidadService.obtenerGruposAfinididad(3)//TODO: AGREGAR PARAMETRO AL CONFIG?
            .subscribe(model => {
                this.modelGrupoAfinidad = model.body
            },
                error => {
                    this.msg = <any>error
                });
        this._conversionService.obtenerConversionPorConcepto("ORIGEN_EMBOZO") //TODO: AGREGAR PARAMETRO AL CONFIG ?
            .subscribe(model => {
                this.modelOrigenEmbozo = model.body
            },
                error => {
                    this.msg = <any>error
                });
        this._conversionService.obtenerConversionPorConcepto("MOTIVOS_IMPRESION") //TODO: AGREGAR PARAMETRO AL CONFIG ?
            .subscribe(model => {
                this.modelMotivoImpresion = model.body
            },
                error => {
                    this.msg = <any>error
                });
        this._conversionService.obtenerConversionPorConcepto("TIPODOC_SO")//TODO: AGREGAR PARAMETRO AL CONFIG ?
            .subscribe(model => {
                this.modelTipoDOC = model.body
            },
                error => {
                    this.msg = <any>error
                });
        this._conversionService.obtenerConversionPorConcepto("CANALES_ORIGEN")//TODO: AGREGAR PARAMETRO AL CONFIG ?
            .subscribe(model => {
                this.modelCanalOrigen = model.body
            },
                error => {
                    this.msg = <any>error
                });
        this._modalidadEntregaService.get()
            .subscribe(model => {
                this.modelModalidadesEntrega = model.body
            },
                error => {
                    this.msg = <any>error
                });

    }
    BuscarSolicitudes(pagina_actual: number = 1) {


        if (this.Validacion()) {
            this.modelConsulta.paginacion.pagina_actual = pagina_actual;

            this.modelConsulta.paginacion.cantidad_botones = 0;


        }
        else {

        }

    }
    Validacion() {
        this.validaciones = new Array<string>();
        let fecha_estado_desde;
        let fecha_estado_hasta;
        let flagValidaciones: boolean = true;

        try {
            if (this.modelConsulta.datosPieza.fecha_estado_desde !== undefined && this.modelConsulta.datosPieza.fecha_estado_desde !== "") {
                let arrFecha = this.modelConsulta.datosPieza.fecha_estado_desde.split('/');
                fecha_estado_desde = new Date(arrFecha[1] + "/" + arrFecha[0] + "/" + arrFecha[2])
                if (fecha_estado_desde.toString() == "Invalid Date") {
                    this.validaciones.push("La Fecha Estado Desde posee un formato incorrecto.");
                    flagValidaciones = false;
                }
            }
        } catch (ex) {
            this.validaciones.push("La Fecha Estado Desde posee un formato incorrecto.");
            flagValidaciones = false;
        }

        try {
            if (this.modelConsulta.datosPieza.fecha_estado_hasta !== undefined && this.modelConsulta.datosPieza.fecha_estado_hasta !== "") {
                let arrFecha = this.modelConsulta.datosPieza.fecha_estado_hasta.split('/');
                fecha_estado_hasta = new Date(arrFecha[1] + "/" + arrFecha[0] + "/" + arrFecha[2])
                if (fecha_estado_hasta.toString() == "Invalid Date") {
                    this.validaciones.push("La Fecha Estado Hasta posee un formato incorrecto.");
                    flagValidaciones = false;
                }
            }
        } catch (ex) {
            this.validaciones.push("La Fecha Estado Hasta posee un formato incorrecto.");
            flagValidaciones = false;
        }

        return flagValidaciones;
    }
    /*Carga de elementos del formulario*/
    ObtenerProductosPorMarca() {
        if (this.modelConsulta.datosTarjeta.marca == undefined)
            return;
        this._productoService.obtenerProductos(this.modelConsulta.datosTarjeta.marca.id)
            .subscribe(x => {
                this.modelProductos = x.body;
            })
    }
    BuscarDescripcionSucursal() {
        if (this.modelConsulta.datosTarjeta.sucursal_nro == undefined || this.modelConsulta.datosTarjeta.sucursal_nro == "") {
            this.sucursal_descripcion = "";
            return;
        }
        this.sucursal_descripcion = "";
        if (this.modelConsulta.datosTarjeta.sucursal_nro != "") {
            this.sucursal_descripcion = "Buscando nombre de sucursal...";

            this._sucursalService.obtenerSucursal(this.modelConsulta.datosTarjeta.sucursal_nro)
                .subscribe(model => {
                    this.sucursal_descripcion = model.body.sucursal_descripcion;
                },
                    error => this.msg = <any>error);
        }

    }

}
