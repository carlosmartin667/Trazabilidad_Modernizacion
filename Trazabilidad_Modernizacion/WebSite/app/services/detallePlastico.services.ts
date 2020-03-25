import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../shared/Constantes';
import { Marca } from '../model/Marca';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DetallePlasticoModel } from '../model/detallePlasticoModel';


@Injectable()
export class DetallePlasticoService {

    constructor(private _http: HttpClient) {
    }


    GetInfoPlastico(IdPlastico: string): Observable<HttpResponse<DetallePlasticoModel>> {
        let consulta = Constantes.URL_OBTENER_DETALLES_PLASTICOS + "?IdPlastico=" + IdPlastico;
        return this._http.get<DetallePlasticoModel>(consulta, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    };
}