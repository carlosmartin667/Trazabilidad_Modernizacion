import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../shared/Constantes';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { GrupoAfinidad } from '../model/Gaf';

@Injectable()
export class GrupoAfinidadService {

    constructor(private _http: HttpClient) {
    }

    get(): Observable<HttpResponse<GrupoAfinidad[]>> {
        return this._http.get<GrupoAfinidad[]>(
            Constantes.URL_OBTENER_GAF, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    };
    obtenerGruposAfinididad(marcaId: number): Observable<HttpResponse<GrupoAfinidad[]>> {
        const url = `${Constantes.URL_OBTENER_GAF}?marcaId=${marcaId}`;

        return this._http.get<GrupoAfinidad[]>(url, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    };
}