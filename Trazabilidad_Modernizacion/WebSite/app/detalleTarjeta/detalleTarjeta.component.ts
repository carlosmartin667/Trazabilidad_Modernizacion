import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface IDetalleTarjeta {
    numeroSolicitud: string;
    productoId: string;
    closable: boolean
}

export class DetalleTarjetaModel implements IDetalleTarjeta {
    numeroSolicitud: string; productoId: string;
    closable: boolean;
}

@Component({
    selector: 'detalleTarjeta-component',
    templateUrl: 'app/detalleTarjeta/detalleTarjeta.component.html'
})

export class DetalleTarjetaComponent extends DialogComponent<IDetalleTarjeta, boolean> implements IDetalleTarjeta, OnInit {
    public cargando: boolean;
    public numeroSolicitud: string;
    public productoId: string;
    public closable: boolean;
    constructor(dialogService: DialogService) {
        super(dialogService);
    }
    ngOnInit() {
    }

    ObtenerDetalleSolicitud() {
        this.cargando = true;

    }

}