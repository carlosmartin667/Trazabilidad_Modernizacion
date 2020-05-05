import { Component, OnInit } from "@angular/core";
import { SeguimientoServices } from "../../services/seguimiento.service";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { SolicitudesSeguimientoModel } from "../../model/SolicitudesSeguimientoModel";


export interface ISeguimientoResult {
    result: boolean;
}

export interface ISeguimientoModel {

    Reg_id: string;
    accion: number; 

}
@Component({
    selector: 'parametros-abm', //Which is used render the template html content  
    templateUrl: 'app/consultasPlasticos/abm/abmSeguimiento.component.html', //which is used to declare our html  
    providers: [SeguimientoServices],
     styleUrls: ['app/consultasPlasticos/abm/Seguimiento.component.css']
})

export class ambSeguimientoComponent extends DialogComponent<ISeguimientoModel, ISeguimientoResult> implements OnInit, ISeguimientoModel {
    public nrotarjeta: SolicitudesSeguimientoModel;
    //public tarjeta: string;
    public Seguimiento: Array<SolicitudesSeguimientoModel>;
    public : string;
    Reg_id: string;
    accion: number;
    ngOnInit() {
        try {
            if (this.accion == 1) {
                this.seguimiento()
            }
        } catch (e) {
            console.log(e);
        }
   
    }

    constructor(dialogService: DialogService, private seguimientoService: SeguimientoServices ) {
        super(dialogService);
    }

    seguimiento() {
        this.seguimientoService.GetInfoSeguimiento(this.Reg_id).subscribe(x => {
            this.Seguimiento = x.body;
        });

        this.seguimientoService.GetObtenerNroTarjeta(this.Reg_id).subscribe(x => {
            this.nrotarjeta = x.body;
        });
        this.result = { result: true };
    }
}