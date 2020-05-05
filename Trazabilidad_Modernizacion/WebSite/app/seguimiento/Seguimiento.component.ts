import { Component, OnInit } from "@angular/core";
import { SeguimientoServices } from "../services/seguimiento.service";
import { SolicitudesSeguimientoModel } from "../model/SolicitudesSeguimientoModel";

@Component({
    selector: 'seguimiento-component',
    templateUrl: 'app/seguimiento/seguimiento.component.html',
    styleUrls:['app/seguimiento/Seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

    public nrotarjeta: SolicitudesSeguimientoModel;
    //public tarjeta: string;
    public Seguimiento: Array<SolicitudesSeguimientoModel>;
    public Reg_id: string;

    constructor(private _SeguimientoServicese: SeguimientoServices ) {
        //this.n = new SolicitudesSeguimientoModel();
        this.nrotarjeta = new SolicitudesSeguimientoModel();
        const urlParams = new URLSearchParams(window.location.search.toLowerCase());
        this.Reg_id = urlParams.get('reg_id');      
    }

    ngOnInit() {

        this._SeguimientoServicese.GetInfoSeguimiento(this.Reg_id).subscribe(x => {
            this.Seguimiento = x.body;
        });

        this._SeguimientoServicese.GetObtenerNroTarjeta(this.Reg_id).subscribe(x => {
            this.nrotarjeta = x.body;
        });

    } 
}