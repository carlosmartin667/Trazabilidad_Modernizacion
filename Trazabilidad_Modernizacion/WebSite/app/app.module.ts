import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleTarjetaComponent } from './detalleTarjeta/detalleTarjeta.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    declarations: [AppComponent,
        ConsultasComponent, DetalleTarjetaComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
