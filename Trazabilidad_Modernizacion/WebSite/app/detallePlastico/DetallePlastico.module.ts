import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetallePlasticoComponent } from './detallePlastico.component';
import { DetallePlasticoService } from '../services/detallePlastico.services';



@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    declarations: [DetallePlasticoComponent, AppComponent],
    providers: [DetallePlasticoService],
    entryComponents: [
    ],
    bootstrap: [DetallePlasticoComponent]
})
export class DetallePlasticoModule { }
