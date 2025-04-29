"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlRemoto = void 0;
var controlRemoto = /** @class */ (function () {
    function controlRemoto(pCantidadPilas, pTamaño, pEstaEncendido) {
        this.cantidadPilas = pCantidadPilas;
        this.tamaño = pTamaño;
        this.estaEncendido = pEstaEncendido;
    }
    controlRemoto.prototype.encender = function () {
        if (this.estaEncendido) {
            return true;
        }
        else {
            return false;
        }
    };
    controlRemoto.prototype.apagar = function () {
    };
    return controlRemoto;
}());
exports.controlRemoto = controlRemoto;
;
