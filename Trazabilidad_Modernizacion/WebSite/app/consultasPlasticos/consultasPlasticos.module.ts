import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ConsultasPlasticosComponent } from "./consultasPlasticos.component";
import { ConsultasPlasticosServices } from "../services/consultasPlasticos.service";

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    declarations: [ConsultasPlasticosComponent],
    providers: [ConsultasPlasticosServices],
    entryComponents: [
    ],
    bootstrap: [ConsultasPlasticosComponent]
})
export class ConsultasPlasticosModule { }