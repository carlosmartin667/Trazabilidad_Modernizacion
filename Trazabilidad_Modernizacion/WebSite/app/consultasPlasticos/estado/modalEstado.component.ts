import { Component } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { EstadoService } from "../../services/estado.service";
import { Estado } from "../../model/Estado";
import { SolicitudesSeguimientoModel } from "../../model/SolicitudesSeguimientoModel";
import { SeguimientoServices } from "../../services/seguimiento.service";
import { DetallePlasticoModel } from "../../model/detallePlasticoModel";
import { ConsultasPlasticosServices } from "../../services/consultasPlasticos.service";

export interface AlertModel {
    ListaEstados: Array<Estado>;
    //reg_id: any;
    listaPlastico: DetallePlasticoModel;
}

@Component({
    selector: 'consultasPlasticos-component',
    templateUrl: 'app/consultasPlasticos/estado/modalEstado.component.html',
    styleUrls: ['app/consultasPlasticos/estado/modalEstado.component.css']
})

export class ModalEstadoComponent extends DialogComponent<AlertModel, null> implements AlertModel {

    public ListaEstados: Array<Estado>;
    public nrotarjeta: SolicitudesSeguimientoModel;
    public listaPlastico: DetallePlasticoModel;
    public activo: boolean = false;
    public estado:  Estado;

    constructor(dialogService: DialogService, private _EstadoService: EstadoService, private _SeguimientoServicese: SeguimientoServices, private _consultasPlasticosServices: ConsultasPlasticosServices) {
        super(dialogService);
        this.nrotarjeta = new SolicitudesSeguimientoModel();
        this.ListaEstados = new Array<Estado>();
        this.estado = new Estado();
        this.listaPlastico = new DetallePlasticoModel();
    }

    ngOnInit() {
        this._SeguimientoServicese.GetObtenerNroTarjeta(this.listaPlastico.Reg_id).subscribe(x => {
            this.nrotarjeta = x.body;
        });
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

            this.estado.estId = estId;
        } else {
            for (var i = 0; i < this.ListaEstados.length; i++) {
                this.ListaEstados[i].act = true;
            }
            this.activo = false;
        }
    }


    Confirmar() {
        console.log(this.estado.estId);


        console.log(this.listaPlastico.Estado_id);
        var Plastico = this.listaPlastico;
        try {
            this._consultasPlasticosServices.modificarEstado(43, 67).subscribe()

            ;
        } catch (e) {
            console.log(e);
        }
   
        //this.e
        //this.listaPlastico.Estado_id
    }
}