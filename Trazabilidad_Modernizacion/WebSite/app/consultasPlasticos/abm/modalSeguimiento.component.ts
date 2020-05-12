import { Component, OnInit } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { SeguimientoServices } from "../../services/seguimiento.service";
import { SolicitudesSeguimientoModel } from "../../model/SolicitudesSeguimientoModel";

export interface AlertModel {
    title: string;
    message: string;
    reg_id: any;
}

@Component({
    selector: 'consultasPlasticos-component',
    templateUrl: 'app/consultasPlasticos/abm/modalSeguimiento.component.html',
    styleUrls: ['app/consultasPlasticos/abm/modalSeguimiento.component.css']
})


export class ModalSeguimientoComponent extends DialogComponent<AlertModel, null> implements AlertModel {
    title: string;
    message: string;
    reg_id:any
    public nrotarjeta: SolicitudesSeguimientoModel;
    public Seguimiento: Array<SolicitudesSeguimientoModel>;
    

    constructor(dialogService: DialogService, private _SeguimientoServicese: SeguimientoServices) {
        super(dialogService);
        this.nrotarjeta = new SolicitudesSeguimientoModel();
    }

    ngOnInit() {
        console.log("hola mundo");
        this._SeguimientoServicese.GetInfoSeguimiento(this.reg_id).subscribe(x => {
            this.Seguimiento = x.body;
        });

        this._SeguimientoServicese.GetObtenerNroTarjeta(this.reg_id).subscribe(x => {
            this.nrotarjeta = x.body;
        });
    }
    //NgModule() {

    //}
}