import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../shared/Constantes';
import { Sucursal } from '../model/Sucursal';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class SucursalService {
   
    constructor(private _http: HttpClient) {
    }
    get(): Observable<HttpResponse<Sucursal[]>> {
        return this._http.get<Sucursal[]>(
            Constantes.URL_OBTENER_MARCAS, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                })
            );
    }

    obtenerSucursal(id: string): Observable<HttpResponse<Sucursal>> {
        const url = `${Constantes.URL_OBTENER_SUCURSAL_DESCRIPCION}?sucursalID=${id}`;

        return this._http.get<Sucursal>(url, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    }
};