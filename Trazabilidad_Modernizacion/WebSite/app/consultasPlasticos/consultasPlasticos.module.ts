import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ConsultasPlasticosComponent } from "./consultasPlasticos.component";
import { ConsultasPlasticosServices } from "../services/consultasPlasticos.service";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { ModalSeguimientoComponent } from "./abm/modalSeguimiento.component";
import { SeguimientoServices } from "../services/seguimiento.service";


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BootstrapModalModule.forRoot({ container: document.body }),
        
    ],
    declarations: [
        ConsultasPlasticosComponent,
        ModalSeguimientoComponent
    ],
    providers: [
        ConsultasPlasticosServices,
        SeguimientoServices
    ],

    entryComponents: [
        ModalSeguimientoComponent
    ],
    bootstrap: [
        ConsultasPlasticosComponent
    ]
})
export class ConsultasPlasticosModule { }