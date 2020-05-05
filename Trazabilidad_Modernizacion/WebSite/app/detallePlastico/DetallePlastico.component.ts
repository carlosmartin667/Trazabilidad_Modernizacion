import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { DetallePlasticoService } from '../services/detallePlastico.services';
import { DetallePlasticoModel } from '../model/detallePlasticoModel';
import { } from '@angular/common/http'
import { error } from '@angular/compiler/src/util';
import { Route } from '@angular/compiler/src/core';
//import { ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'consultas-component',
    templateUrl: 'app/detallePlastico/detallePlastico.component.html' 
})
export class DetallePlasticoComponent implements OnInit {
    //public infoPlastico: DetallePlasticoModel = new DetallePlasticoModel;
    public idPlastico: string;
    public msg: string;
    constructor(private _DetallePlasticoService: DetallePlasticoService
        //private rutaActiva: ActivatedRoute
   
    ) {

        this.infoPlastico = new DetallePlasticoModel();
        const urlParams = new URLSearchParams(window.location.search.toLowerCase());
        this.idPlastico = urlParams.get('idplastico');
    }

    public Plastico_nro: number;
    //public plastico: number = parseInt(this.idPlastico);
    public infoPlastico: DetallePlasticoModel;
    ngOnInit() {
        this._DetallePlasticoService.GetInfoPlastico(this.idPlastico).subscribe(x => {
            this.infoPlastico = x.body;
            console.log(this.infoPlastico);
        });
        
    }
    
}
