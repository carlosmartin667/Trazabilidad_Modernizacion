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
var seguimiento_service_1 = require("../services/seguimiento.service");
var SolicitudesSeguimientoModel_1 = require("../model/SolicitudesSeguimientoModel");
var SeguimientoComponent = /** @class */ (function () {
    function SeguimientoComponent(_SeguimientoServicese) {
        this._SeguimientoServicese = _SeguimientoServicese;
        //this.n = new SolicitudesSeguimientoModel();
        this.nrotarjeta = new SolicitudesSeguimientoModel_1.SolicitudesSeguimientoModel();
        var urlParams = new URLSearchParams(window.location.search.toLowerCase());
        this.Reg_id = urlParams.get('reg_id');
    }
    SeguimientoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SeguimientoServicese.GetInfoSeguimiento(this.Reg_id).subscribe(function (x) {
            _this.Seguimiento = x.body;
        });
        this._SeguimientoServicese.GetObtenerNroTarjeta(this.Reg_id).subscribe(function (x) {
            _this.nrotarjeta = x.body;
        });
    };
    SeguimientoComponent = __decorate([
        core_1.Component({
            selector: 'seguimiento-component',
            templateUrl: 'app/seguimiento/seguimiento.component.html',
            styleUrls: ['app/seguimiento/Seguimiento.component.css']
        }),
        __metadata("design:paramtypes", [seguimiento_service_1.SeguimientoServices])
    ], SeguimientoComponent);
    return SeguimientoComponent;
}());
exports.SeguimientoComponent = SeguimientoComponent;
//# sourceMappingURL=Seguimiento.component.js.map