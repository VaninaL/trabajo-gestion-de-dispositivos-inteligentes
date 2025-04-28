"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.televisor = void 0;
var controlRemoto_1 = require("./controlRemoto");
var televisor = /** @class */ (function () {
    function televisor(pMarca, pTipo, pWifi) {
        this.control = new controlRemoto_1.controlRemoto();
        this.marca = pMarca;
        this.tipo = pTipo;
        this.wifi = pWifi;
    }
    televisor.prototype.encender = function () {
    };
    televisor.prototype.apagar = function () {
    };
    return televisor;
}());
exports.televisor = televisor;
