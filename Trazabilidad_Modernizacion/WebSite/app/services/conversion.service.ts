import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../shared/Constantes';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Conversion } from '../model/Conversion';

@Injectable()
export class ConversionService {

    constructor(private _http: HttpClient) {
    }

   obtenerConversionPorConcepto(concepto: string): Observable<HttpResponse<Conversion[]>> {
        const url = `${Constantes.URL_OBTENER_CONVERSION_POR_CONCEPTO}?concepto=${concepto}`;

        return this._http.get<Conversion[]>(url, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    };
}