import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { DetallePlasticoService } from '../services/detallePlastico.services';
import { DetallePlasticoModel } from '../model/detallePlasticoModel';
import { } from '@angular/common/http'
import { error } from '@angular/compiler/src/util';
@Component({
    selector: 'consultas-component',
    templateUrl: 'app/detallePlastico/detallePlastico.component.html' 
})
export class DetallePlasticoComponent implements OnInit {
    //public infoPlastico: DetallePlasticoModel = new DetallePlasticoModel;
    public idPlastico: string;
    public msg: string;
    constructor(private _DetallePlasticoService: DetallePlasticoService
)   {
        const urlParams = new URLSearchParams(window.location.search.toLowerCase());
        this.idPlastico = urlParams.get('?IdPlastico');
    }

    public plastico: number = 102409331;
    public infoPlastico: DetallePlasticoModel;
    ngOnInit() {

        this._DetallePlasticoService.GetInfoPlastico(this.plastico).subscribe(x => {
            this.infoPlastico = x.body;
           
        });
        
    }
    
}
