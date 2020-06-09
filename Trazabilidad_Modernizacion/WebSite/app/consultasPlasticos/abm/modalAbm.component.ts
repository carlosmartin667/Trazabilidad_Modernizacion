import { Component, OnInit } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { SeguimientoServices } from "../../services/seguimiento.service";
import { SolicitudesSeguimientoModel } from "../../model/SolicitudesSeguimientoModel";
import { Estado } from "../../model/Estado";
import { DetallePlasticoModel } from "../../model/detallePlasticoModel";
import { EstadoService } from "../../services/estado.service";
import { ConsultasPlasticosServices } from "../../services/consultasPlasticos.service";

export interface AlertModel {
    accion: number
    reg_id: any;
    listaPlastico: DetallePlasticoModel;
}

@Component({
    selector: 'consultasPlasticos-component',
    templateUrl: 'app/consultasPlasticos/abm/modalAbm.component.html',
    styleUrls: ['app/consultasPlasticos/abm/modalAbm.component.css']
})


export class ModalAbmComponent extends DialogComponent<AlertModel, null> implements AlertModel {

    accion: number;
    reg_id: any;
    public nrotarjeta: string;
    public Seguimiento: Array<SolicitudesSeguimientoModel>;
    public ListaEstados: Array<Estado>;
    public listaPlastico: DetallePlasticoModel;
    public activo: boolean = false;
    public estId: string = "0";
    public obs: string;
    public ListaEstadosPermitidas: Array<Estado>;
    public CantidadEstados: number;

    constructor(dialogService: DialogService, private _SeguimientoServicese: SeguimientoServices, private _EstadoService: EstadoService, private _consultasPlasticosServices: ConsultasPlasticosServices) {
        super(dialogService);
        this.nrotarjeta = "";
        this.ListaEstados = new Array<Estado>();
        this.listaPlastico = new DetallePlasticoModel();
        this.obs = "";
        this.CantidadEstados = 0;
        this.ListaEstadosPermitidas = new Array<Estado>();
    }

    ngOnInit() {

        this._SeguimientoServicese.GetObtenerNroTarjeta(this.reg_id).subscribe(x => {
            this.nrotarjeta = x.body;
        });
        if (this.accion == 1) {
            this._SeguimientoServicese.GetInfoSeguimiento(this.reg_id).subscribe(x => {
                this.Seguimiento = x.body;
            });
       
        }

        if (this.accion == 2) {
            this._consultasPlasticosServices.GetObtenerSecuenciaEstado(this.listaPlastico.Estado_id).subscribe(x => {
                this.ListaEstados = x.body;
                this.CantidadEstados = this.ListaEstados.length;
            });
        }
    }
  
    Validar(estId: string) {

        if (this.activo == false) {
            for (var i = 0; i < this.ListaEstados.length; i++) {
                if (this.ListaEstados[i].estId == estId) {
                    this.ListaEstados[i].act = true;
                }
                else {
                    this.ListaEstados[i].act = false;
                }
            }
            this.activo = true;

            this.estId = estId;
        } else {
            for (var i = 0; i < this.ListaEstados.length; i++) {
                this.ListaEstados[i].act = true;
            }
            this.activo = false;
            this.estId = "0";
        }
    }


    Confirmar() {
     
        var Estadoid = this.estId;
        var IdPlastico = this.listaPlastico.Reg_id;
        try {
            this._consultasPlasticosServices.modificarEstado(IdPlastico, Estadoid, this.obs).subscribe();
            this.close();
        } catch (e) {

            console.log(e);
        }

        try {
     
            this.dialogService.addDialog(ModalAbmComponent, { listaPlastico: this.listaPlastico, reg_id: this.reg_id, accion: 1 });

        } catch (e) {
            console.log(e);
        }

    }

    recargar() {
        try {
            this.close();
            this.dialogService.addDialog(ModalAbmComponent, { listaPlastico: this.listaPlastico, reg_id: this.reg_id, accion: 1 });

        } catch (e) {
            console.log(e);
        }
    }
}