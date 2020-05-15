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
var seguimiento_service_1 = require("../../services/seguimiento.service");
var SolicitudesSeguimientoModel_1 = require("../../model/SolicitudesSeguimientoModel");
var ModalSeguimientoComponent = /** @class */ (function (_super) {
    __extends(ModalSeguimientoComponent, _super);
    function ModalSeguimientoComponent(dialogService, _SeguimientoServicese) {
        var _this = _super.call(this, dialogService) || this;
        _this._SeguimientoServicese = _SeguimientoServicese;
        _this.nrotarjeta = new SolicitudesSeguimientoModel_1.SolicitudesSeguimientoModel();
        return _this;
    }
    ModalSeguimientoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("hola mundo");
        this._SeguimientoServicese.GetInfoSeguimiento(this.reg_id).subscribe(function (x) {
            _this.Seguimiento = x.body;
        });
        this._SeguimientoServicese.GetObtenerNroTarjeta(this.reg_id).subscribe(function (x) {
            _this.nrotarjeta = x.body;
        });
    };
    ModalSeguimientoComponent = __decorate([
        core_1.Component({
            selector: 'consultasPlasticos-component',
            templateUrl: 'app/consultasPlasticos/seguimiento/modalSeguimiento.component.html',
            styleUrls: ['app/consultasPlasticos/seguimiento/modalSeguimiento.component.css']
        }),
        __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService, seguimiento_service_1.SeguimientoServices])
    ], ModalSeguimientoComponent);
    return ModalSeguimientoComponent;
}(ng2_bootstrap_modal_1.DialogComponent));
exports.ModalSeguimientoComponent = ModalSeguimientoComponent;
//# sourceMappingURL=modalSeguimiento.component.js.map