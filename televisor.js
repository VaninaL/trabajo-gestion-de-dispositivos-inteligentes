"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.televisor = void 0;
var controlRemoto_1 = require("./controlRemoto");
var DispositivoInteligente_1 = require("./DispositivoInteligente");
var televisor = /** @class */ (function (_super) {
    __extends(televisor, _super);
    function televisor(pMarca, pModelo, pWifi, pPulgadas) {
        var _this = _super.call(this, pMarca, pModelo) || this;
        _this.control = new controlRemoto_1.controlRemoto(2, "mediano", true);
        _this.marca = pMarca;
        _this.wifi = pWifi;
        _this.nombre = "televisor";
        return _this;
    }
    televisor.prototype.MostrarNombre = function () {
        console.log(this.nombre);
    };
    televisor.prototype.funcionar = function () {
        if (this.control.encender()) {
            console.log("El televisor esta encendido");
        }
        else {
            console.log("El televisor esta apagado");
        }
    };
    return televisor;
}(DispositivoInteligente_1.DispInteligente));
exports.televisor = televisor;
;
