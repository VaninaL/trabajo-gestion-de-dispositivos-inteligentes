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
exports.lavarropasInteligente = void 0;
var DispositivoInteligente_1 = require("./DispositivoInteligente");
var lavarropasInteligente = /** @class */ (function (_super) {
    __extends(lavarropasInteligente, _super);
    function lavarropasInteligente(pMarca, pModelo, pTiempo, pKilos) {
        var _this = _super.call(this, pMarca, pModelo) || this;
        _this.tiempo = pTiempo;
        _this.kilos = pKilos;
        _this.nombre = "lavarropas";
        return _this;
    }
    lavarropasInteligente.prototype.MostrarNombre = function () {
        console.log(this.nombre);
    };
    lavarropasInteligente.prototype.funcionar = function () {
        console.log("Introduzca la ropa");
        if (this.kilos <= 6 && this.tiempo < 40) {
            console.log("Lavarropas funcionando");
        }
        else {
            if (this.kilos > 6) {
                console.log("Ha superado el peso permitido de ropa");
            }
            if (this.tiempo > 40) {
                console.log("Introduzca un valor menor a 40 minutos");
            }
        }
    };
    return lavarropasInteligente;
}(DispositivoInteligente_1.DispInteligente));
exports.lavarropasInteligente = lavarropasInteligente;
;
