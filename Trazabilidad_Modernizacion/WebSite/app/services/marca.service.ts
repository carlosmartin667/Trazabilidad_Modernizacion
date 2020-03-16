import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../shared/Constantes';
import { Marca } from '../model/Marca';
import { map,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class MarcaService {
    constructor(private _http: HttpClient) {
    }
    get(): Observable<HttpResponse<Marca[]>> {
        return this._http.get<Marca[]>(
            Constantes.URL_OBTENER_MARCAS, { observe: 'response' })
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error.message);
                    return throwError(error.message);
                })
        );
    }

};