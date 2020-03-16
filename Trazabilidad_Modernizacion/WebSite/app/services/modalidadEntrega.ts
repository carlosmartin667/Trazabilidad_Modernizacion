import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../shared/Constantes';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ModalidadEntrega } from '../model/ModalidadEntrega';

@Injectable()
export class ModalidadEntregaService {

    constructor(private _http: HttpClient) {
    }

    get(): Observable<HttpResponse<ModalidadEntrega[]>> {
        return this._http.get<ModalidadEntrega[]>(
            Constantes.URL_OBTENER_MODALIDADES_ENTREGA, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    };
}