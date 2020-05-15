import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ConsultasPlasticosComponent } from "./consultasPlasticos.component";
import { ConsultasPlasticosServices } from "../services/consultasPlasticos.service";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { SeguimientoServices } from "../services/seguimiento.service";
import { ModalSeguimientoComponent } from "./seguimiento/modalSeguimiento.component";
import { ModalEstadoComponent } from "./estado/modalEstado.component";
import { EstadoService } from "../services/estado.service";


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BootstrapModalModule.forRoot({ container: document.body }),
        
    ],
    declarations: [
        ConsultasPlasticosComponent,
        ModalSeguimientoComponent,

        ModalEstadoComponent
    ],
    providers: [
        ConsultasPlasticosServices,
        SeguimientoServices,
        EstadoService
    ],

    entryComponents: [
        ModalSeguimientoComponent,
        ModalEstadoComponent
    ],
    bootstrap: [
        ConsultasPlasticosComponent
    ]
})
export class ConsultasPlasticosModule { }