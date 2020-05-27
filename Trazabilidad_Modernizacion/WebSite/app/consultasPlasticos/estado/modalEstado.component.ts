import { Component } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { EstadoService } from "../../services/estado.service";
import { Estado } from "../../model/Estado";
import { SolicitudesSeguimientoModel } from "../../model/SolicitudesSeguimientoModel";
import { SeguimientoServices } from "../../services/seguimiento.service";
import { DetallePlasticoModel } from "../../model/detallePlasticoModel";
import { ConsultasPlasticosServices } from "../../services/consultasPlasticos.service";

export interface AlertModel {
  
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
    public estId: string = "0";
    public obs: string;
    public ListaEstadosPermitidas: Array<Estado>;

    constructor(dialogService: DialogService, private _EstadoService: EstadoService, private _SeguimientoServicese: SeguimientoServices, private _consultasPlasticosServices: ConsultasPlasticosServices) {
        super(dialogService);
        this.nrotarjeta = new SolicitudesSeguimientoModel();
        this.ListaEstados = new Array<Estado>();
        this.listaPlastico = new DetallePlasticoModel();
        this.obs = "";
    }

    ngOnInit() {
        this._SeguimientoServicese.GetObtenerNroTarjeta(this.listaPlastico.Reg_id).subscribe(x => {
            this.nrotarjeta = x.body;
        });
        this._consultasPlasticosServices.GetObtenerSecuenciaEstado(this.listaPlastico.Estado_id).subscribe(x => {
            this.ListaEstados =x.body;
        });
        this.estadosPosibles();
    }

    estadosPosibles() {
        for (var i = 0; i < this.ListaEstados.length; i++) {
            if (this.ListaEstados[i].estId < this.listaPlastico.Estado_id.toString()) {
                this.ListaEstadosPermitidas.push(this.ListaEstados[i])
            }
          
        }

        for (var i = 0; i < this.ListaEstadosPermitidas.length; i++) {
            console.log(this.ListaEstadosPermitidas[i])
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
        console.log(this.listaPlastico.Estado_id);
        var Estadoid = this.estId;
        var IdPlastico = this.listaPlastico.Reg_id;
        try {
            this._consultasPlasticosServices.modificarEstado(IdPlastico, Estadoid,this.obs).subscribe();
        } catch (e) {
            console.log(e);
        }
   
    } 
}