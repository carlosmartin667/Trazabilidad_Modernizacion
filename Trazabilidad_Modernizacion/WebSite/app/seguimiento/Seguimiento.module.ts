import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeguimientoComponent } from './Seguimiento.component';
import { SeguimientoServices } from '../services/seguimiento.service';




@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    declarations: [SeguimientoComponent, AppComponent],
    providers: [SeguimientoServices],
    entryComponents: [
    ],
    bootstrap: [SeguimientoComponent]
})
export class SeguimientoModule { }