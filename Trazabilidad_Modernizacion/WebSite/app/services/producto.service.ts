import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../shared/Constantes';
import { Producto } from '../model/Producto';
import { map, catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { of, throwError } from 'rxjs';
@Injectable()
export class ProductoService {
    headers: HttpHeaders;
    options: HttpRequest<any>;

    constructor(private _http: HttpClient) { }

    url = Constantes.URL_OBTENER_PRODUCTOS;
    get(): Observable<Producto[]>{
        return this._http
            .get<Producto[]>(Constantes.URL_OBTENER_PRODUCTOS)
            .pipe(
                catchError(this.handleError<Producto[]>('producto', [])));;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

    obtenerProductos(idMarca: number): Observable<HttpResponse<Producto[]>>{
        const url = `${Constantes.URL_OBTENER_PRODUCTOS}?marcaID=${idMarca}`;

        return this._http.get<Producto[]>(url, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                }))
    }
};