﻿import { Injectable } from "@angular/core";
import { HttpHeaders, HttpResponse, HttpErrorResponse, HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Constantes } from "../shared/Constantes";
import { catchError } from "rxjs/operators";
import { SolicitudesSeguimientoModel } from "../model/SolicitudesSeguimientoModel";

const _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class SeguimientoServices {
    constructor(private _http: HttpClient) {
    }

    GetInfoSeguimiento(solId: any): Observable<HttpResponse<SolicitudesSeguimientoModel[]>> {
        let consulta = Constantes.URL_OBTENER_SEGUIMIENTO + "?solId=" + solId;
        return this._http.get<SolicitudesSeguimientoModel[]>(consulta, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    };



    GetObtenerNroTarjeta(solId: any): Observable<HttpResponse<SolicitudesSeguimientoModel>> {
        let consulta = Constantes.URL_OBTENER_OBTENERNRMTARJETA + "?solId=" + solId;
        return this._http.get<SolicitudesSeguimientoModel>(consulta, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    };
    

}