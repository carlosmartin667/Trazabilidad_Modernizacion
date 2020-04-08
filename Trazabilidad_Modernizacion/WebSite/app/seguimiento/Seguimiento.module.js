"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("../app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var Seguimiento_component_1 = require("./Seguimiento.component");
var seguimiento_service_1 = require("../services/seguimiento.service");
var SeguimientoModule = /** @class */ (function () {
    function SeguimientoModule() {
    }
    SeguimientoModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpClientModule, forms_1.FormsModule],
            declarations: [Seguimiento_component_1.SeguimientoComponent, app_component_1.AppComponent],
            providers: [seguimiento_service_1.SeguimientoServices],
            entryComponents: [],
            bootstrap: [Seguimiento_component_1.SeguimientoComponent]
        })
    ], SeguimientoModule);
    return SeguimientoModule;
}());
exports.SeguimientoModule = SeguimientoModule;
//# sourceMappingURL=Seguimiento.module.js.map