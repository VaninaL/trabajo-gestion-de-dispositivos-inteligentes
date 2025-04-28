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
exports.impresoraInteligente = void 0;
var DispositivoInteligente_1 = require("./DispositivoInteligente");
var impresoraInteligente = /** @class */ (function (_super) {
    __extends(impresoraInteligente, _super);
    function impresoraInteligente(pMarca, pModelo, pCopias) {
        var _this = _super.call(this, pMarca, pModelo) || this;
        _this.contador = 0;
        _this.copias = pCopias;
        _this.contador = 0;
        _this.nombre = "impresora";
        return _this;
    }
    impresoraInteligente.prototype.MostrarNombre = function () {
        console.log(this.nombre);
    };
    impresoraInteligente.prototype.funcionar = function () {
        if (this.contador <= 100) {
            console.log("Su impresora se esta preparando para imprimir ".concat(this.copias, " copias"));
        }
        else {
            console.log(" Su impresora necesita descansar ");
        }
    };
    impresoraInteligente.prototype.imprimir = function () {
        this.contador = this.contador + this.copias;
        console.log(" Imprimiendo " + this.contador + " copias ");
    };
    return impresoraInteligente;
}(DispositivoInteligente_1.DispInteligente));
exports.impresoraInteligente = impresoraInteligente;
;
var impresoraVani = new impresoraInteligente("epson", "xp 211", 10);
impresoraVani.MostrarNombre();
