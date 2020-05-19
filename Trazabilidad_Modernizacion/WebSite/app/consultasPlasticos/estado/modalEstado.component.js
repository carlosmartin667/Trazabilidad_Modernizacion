"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var estado_service_1 = require("../../services/estado.service");
var SolicitudesSeguimientoModel_1 = require("../../model/SolicitudesSeguimientoModel");
var seguimiento_service_1 = require("../../services/seguimiento.service");
var detallePlasticoModel_1 = require("../../model/detallePlasticoModel");
var consultasPlasticos_service_1 = require("../../services/consultasPlasticos.service");
var ModalEstadoComponent = /** @class */ (function (_super) {
    __extends(ModalEstadoComponent, _super);
    function ModalEstadoComponent(dialogService, _EstadoService, _SeguimientoServicese, _consultasPlasticosServices) {
        var _this = _super.call(this, dialogService) || this;
        _this._EstadoService = _EstadoService;
        _this._SeguimientoServicese = _SeguimientoServicese;
        _this._consultasPlasticosServices = _consultasPlasticosServices;
        _this.activo = false;
        _this.estId = "0";
        _this.nrotarjeta = new SolicitudesSeguimientoModel_1.SolicitudesSeguimientoModel();
        _this.ListaEstados = new Array();
        _this.listaPlastico = new detallePlasticoModel_1.DetallePlasticoModel();
        return _this;
    }
    ModalEstadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SeguimientoServicese.GetObtenerNroTarjeta(this.listaPlastico.Reg_id).subscribe(function (x) {
            _this.nrotarjeta = x.body;
        });
        this.estadosPosibles();
    };
    ModalEstadoComponent.prototype.estadosPosibles = function () {
        for (var i = 0; i < this.ListaEstados.length; i++) {
            if (this.ListaEstados[i].estId < this.listaPlastico.Estado_id.toString()) {
                this.ListaEstadosPermitidas.push(this.ListaEstados[i]);
            }
        }
        for (var i = 0; i < this.ListaEstadosPermitidas.length; i++) {
            console.log(this.ListaEstadosPermitidas[i]);
        }
    };
    ModalEstadoComponent.prototype.Validar = function (estId) {
        if (this.activo == false) {
            for (var i = 0; i < this.ListaEstados.length; i++) {
                if (this.ListaEstados[i].estId == estId) {
                    this.ListaEstados[i].act = true;
                }
                else {
                    this.ListaEstados[i].act = false;
                }
            }
            this.activo = true;
            this.estId = estId;
        }
        else {
            for (var i = 0; i < this.ListaEstados.length; i++) {
                this.ListaEstados[i].act = true;
            }
            this.activo = false;
            this.estId = "0";
        }
    };
    ModalEstadoComponent.prototype.Confirmar = function () {
        console.log(this.listaPlastico.Estado_id);
        var Estadoid = this.estId;
        var IdPlastico = this.listaPlastico.Reg_id;
        try {
            this._consultasPlasticosServices.modificarEstado(IdPlastico, Estadoid).subscribe();
        }
        catch (e) {
            console.log(e);
        }
    };
    ModalEstadoComponent = __decorate([
        core_1.Component({
            selector: 'consultasPlasticos-component',
            templateUrl: 'app/consultasPlasticos/estado/modalEstado.component.html',
            styleUrls: ['app/consultasPlasticos/estado/modalEstado.component.css']
        }),
        __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService, estado_service_1.EstadoService, seguimiento_service_1.SeguimientoServices, consultasPlasticos_service_1.ConsultasPlasticosServices])
    ], ModalEstadoComponent);
    return ModalEstadoComponent;
}(ng2_bootstrap_modal_1.DialogComponent));
exports.ModalEstadoComponent = ModalEstadoComponent;
//# sourceMappingURL=modalEstado.component.js.map