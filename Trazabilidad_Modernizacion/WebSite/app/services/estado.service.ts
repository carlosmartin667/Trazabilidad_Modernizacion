import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../shared/Constantes';
import { Estado } from '../model/Estado';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DetallePlasticoModel } from '../model/detallePlasticoModel';
const _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class EstadoService {

    constructor(private _http: HttpClient) {
    }

    get(): Observable<HttpResponse<Estado[]>> {
        return this._http.get<Estado[]>(
            Constantes.URL_OBTENER_ESTADOS_SOLICITUD, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }) )
    };
    obtenerEstados(catID: number): Observable<HttpResponse<Estado[]>> {
        const url = `${Constantes.URL_OBTENER_ESTADOS_SOLICITUD}?catID=${catID}`;

        return this._http.get<Estado[]>( url, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    };

    modificarEstado(Plastico: DetallePlasticoModel): Observable<any> {
        //let url = Constantes.URL_OBTENER_MODIFICARESTADO + "?Plastico=" + Plastico;


        return this._http.post<any>(Constantes.URL_OBTENER_MODIFICARESTADO, JSON.stringify(Plastico), _httpOptions)
            .pipe(
                map(
                    (response: DetallePlasticoModel) => response
                )
            );
        //return this._http.get<boolean>(url, { observe: 'response' })
        //    .pipe(
        //        catchError((error: HttpErrorResponse) => {
        //            console.log(error.message);
        //            return throwError(error.message);
        //        }))
  
    }
}