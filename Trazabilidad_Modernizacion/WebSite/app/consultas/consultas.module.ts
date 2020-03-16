import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConsultasComponent } from './consultas.component';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleTarjetaComponent } from '../detalleTarjeta/detalleTarjeta.component';
import { HttpClientModule } from '@angular/common/http';
import { MarcaService } from '../services/marca.service'
import { EstadoService } from '../services/estado.service';
import { ProductoService } from '../services/producto.service';
import { SucursalService } from '../services/sucursal.service';
import { GrupoAfinidadService } from '../services/gaf.service';
import { ConversionService } from '../services/conversion.service';
import { ModalidadEntregaService } from '../services/modalidadEntrega';


@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    declarations: [ConsultasComponent, DetalleTarjetaComponent, AppComponent],
    providers: [MarcaService, EstadoService, ProductoService, SucursalService,
        GrupoAfinidadService, ConversionService,ModalidadEntregaService  ],
    entryComponents: [
    ],
    bootstrap: [ConsultasComponent]
})
export class ConsultasModule { }
