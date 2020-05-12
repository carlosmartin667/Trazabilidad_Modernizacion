"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var Constantes_1 = require("../shared/Constantes");
var operators_1 = require("rxjs/operators");
var _httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var SeguimientoServices = /** @class */ (function () {
    function SeguimientoServices(_http) {
        this._http = _http;
    }
    SeguimientoServices.prototype.GetInfoSeguimiento = function (solId) {
        var consulta = Constantes_1.Constantes.URL_OBTENER_SEGUIMIENTO + "?solId=" + solId;
        return this._http.get(consulta, { observe: 'response' })
            .pipe(operators_1.catchError(function (error) {
            console.log(error.message);
            return rxjs_1.throwError(error.message);
        }));
    };
    ;
    SeguimientoServices.prototype.GetObtenerNroTarjeta = function (solId) {
        var consulta = Constantes_1.Constantes.URL_OBTENER_OBTENERNRMTARJETA + "?solId=" + solId;
        return this._http.get(consulta, { observe: 'response' })
            .pipe(operators_1.catchError(function (error) {
            console.log(error.message);
            return rxjs_1.throwError(error.message);
        }));
    };
    ;
    SeguimientoServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SeguimientoServices);
    return SeguimientoServices;
}());
exports.SeguimientoServices = SeguimientoServices;
//# sourceMappingURL=seguimiento.service.js.map