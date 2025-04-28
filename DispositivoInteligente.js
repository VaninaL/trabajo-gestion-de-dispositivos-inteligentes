"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispInteligente = void 0;
var DispInteligente = /** @class */ (function () {
    function DispInteligente(pMarca, pModelo) {
        this.marca = pMarca;
        this.modelo = pModelo;
    }
    DispInteligente.prototype.conectar = function () {
        console.log("El dispositivo se encuentra conectado");
    };
    DispInteligente.prototype.desconectar = function () {
        console.log("El dispositivo se encuentra desconectado");
    };
    DispInteligente.prototype.MostrarInfo = function () {
    };
    DispInteligente.prototype.getMostrarInfo = function () {
        console.log("Usted esta usando un dispositivo marca ".concat(this.marca, " que corresponde al modelo ").concat(this.modelo));
    };
    DispInteligente.prototype.setMostrarInfo = function (pMarca, pModelo) {
        this.marca = pMarca;
        this.modelo = pModelo;
    };
    return DispInteligente;
}());
exports.DispInteligente = DispInteligente;
;
