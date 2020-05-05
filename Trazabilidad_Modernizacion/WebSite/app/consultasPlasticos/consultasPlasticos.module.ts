import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ConsultasPlasticosComponent } from "./consultasPlasticos.component";
import { ConsultasPlasticosServices } from "../services/consultasPlasticos.service";
import { ambSeguimientoComponent } from "./abm/abmSeguimiento.component";
import { BootstrapModalModule } from "ng2-bootstrap-modal/dist/bootstrap-modal.module";
import { SeguimientoServices } from "../services/seguimiento.service";
import { AppComponent } from "../app.component";
import { DialogService } from "ng2-bootstrap-modal";
import { ModalSeguimientoComponent } from "./modal/modalSeguimiento.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [BrowserModule,
        HttpClientModule,
        FormsModule,
        BootstrapModalModule,
        ModalSeguimientoComponent,
        NgbModule
        ],
    declarations: [ConsultasPlasticosComponent, ambSeguimientoComponent, AppComponent, ModalSeguimientoComponent],
    providers: [ConsultasPlasticosServices, HttpClientModule, SeguimientoServices, DialogService],
    entryComponents: [
        ambSeguimientoComponent
    ],
    bootstrap: [ConsultasPlasticosComponent, ModalSeguimientoComponent]
})
export class ConsultasPlasticosModule { }