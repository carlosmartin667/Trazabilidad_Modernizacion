import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetalleTarjetaComponent } from './detalleTarjeta.component';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'ng2-bootstrap-modal';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [DetalleTarjetaComponent, AppComponent],
    providers: [DialogService],
    entryComponents: [
    ],
    bootstrap: [DetalleTarjetaComponent]
})
export class DetalleTarjetaModel { }
