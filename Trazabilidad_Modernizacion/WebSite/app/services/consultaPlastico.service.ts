import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constantes } from '../shared/Constantes';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ConsultaTarjetaModel } from '../model/ConsultaTarjetaModel';
import { PlasticosGrillaModel } from '../model/Grillas/PlasticosGrillaModel';
const _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ConsultaPlasticosService {
     
    constructor(private _http: HttpClient) {
    }
    
    post(model: PlasticosGrillaModel): Observable<PlasticosGrillaModel> {
        let body = JSON.stringify(model);
        return this._http.post(Constantes.URL_OBTENER_GRILLA_PLASTICOS, body, _httpOptions)
            .pipe(
                map(
                    (response: PlasticosGrillaModel) => response
                )
            );
    }


}