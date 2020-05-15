import { Component } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { EstadoService } from "../../services/estado.service";
import { Estado } from "../../model/Estado";
import { SolicitudesSeguimientoModel } from "../../model/SolicitudesSeguimientoModel";
import { SeguimientoServices } from "../../services/seguimiento.service";
import { DetallePlasticoModel } from "../../model/detallePlasticoModel";

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

    //reg_id: any
    public ListaEstados: Array<Estado>;
    public nrotarjeta: SolicitudesSeguimientoModel;
    public listaPlastico: DetallePlasticoModel;
    public activo: boolean = false;

    public avilitar: string;

    constructor(dialogService: DialogService, private _EstadoService: EstadoService, private _SeguimientoServicese: SeguimientoServices) {
        super(dialogService);
        this.nrotarjeta = new SolicitudesSeguimientoModel();
        this.ListaEstados = new Array<Estado>();
    }

    ngOnInit() {
        this._SeguimientoServicese.GetObtenerNroTarjeta(this.listaPlastico.Reg_id).subscribe(x => {
            this.nrotarjeta = x.body;
        });
    }


    Validar(estId: string) {
        var cantidadEstados = this.ListaEstados.length;
        console.log(i);

        this.avilitar = "disabled";
        if (this.activo == false) {
            for (var i = 0; i < this.ListaEstados.length; i++) {


                if (this.ListaEstados[i].estId == estId) {
                    this.ListaEstados[i].act = true;
                }
                else {
                    this.ListaEstados[i].act = false;
                }


                if (this.ListaEstados[i].act == true) {
                    console.log("true");
                }
                if (this.ListaEstados[i].act == false) {
                    console.log("false");
                }
            }

            this.activo = true;
        } else {
            for (var i = 0; i < this.ListaEstados.length; i++) {

                this.ListaEstados[i].act = true;


            }
            this.activo = false;
        }


    }

}