"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlRemoto = void 0;
var controlRemoto = /** @class */ (function () {
    function controlRemoto() {
    }
    controlRemoto.prototype.encender = function () {
        console.log("Su dispositivo esta encendido");
    };
    controlRemoto.prototype.apagar = function () {
        console.log("Su dispositivo esta apagado");
    };
    return controlRemoto;
}());
exports.controlRemoto = controlRemoto;
