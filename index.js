"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImpresoraInteligente_1 = require("./ImpresoraInteligente");
var lavarropasInteligente_1 = require("./lavarropasInteligente");
var televisor_1 = require("./televisor");
var dispositivo = [];
var impresoraVani = new ImpresoraInteligente_1.impresoraInteligente("epson", "xp 211", 10);
var impresoraJuan = new ImpresoraInteligente_1.impresoraInteligente("brother", "familiar 21", 101);
var lavarropasVani = new lavarropasInteligente_1.lavarropasInteligente("Dream", "AHG25", 30, 5);
var lavarropasJuan = new lavarropasInteligente_1.lavarropasInteligente("whirlpool", "WWN10AB", 50, 4);
var lavarropasPedro = new lavarropasInteligente_1.lavarropasInteligente("samsung", "LK9", 30, 8);
var televisorVani = new televisor_1.televisor("LG", "HD475", true, 47);
dispositivo.push(impresoraVani);
dispositivo.push(impresoraJuan);
dispositivo.push(lavarropasVani);
dispositivo.push(lavarropasJuan);
dispositivo.push(lavarropasPedro);
dispositivo.push(televisorVani);
for (var i = 0; i < dispositivo.length; i++) {
    console.log("----------------------------------------------------------------------------");
    dispositivo[i].MostrarNombre();
    dispositivo[i].getMostrarInfo();
    dispositivo[i].conectar();
    dispositivo[i].funcionar();
    dispositivo[i].desconectar();
    console.log("----------------------------------------------------------------------------");
}
;
