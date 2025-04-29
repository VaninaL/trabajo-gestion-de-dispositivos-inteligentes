import { IConectable } from "./interfaz";
import { DispInteligente } from "./DispositivoInteligente";
import { impresoraInteligente } from "./ImpresoraInteligente";
import { lavarropasInteligente } from "./lavarropasInteligente";
import { televisor } from "./televisor";

const dispositivo:DispInteligente[] = [];
const impresoraVani:impresoraInteligente = new impresoraInteligente("epson","xp 211",10);
const impresoraJuan:impresoraInteligente = new impresoraInteligente("brother","familiar 21",101);
const lavarropasVani:lavarropasInteligente = new lavarropasInteligente("Dream","AHG25",30,5)
const lavarropasJuan:lavarropasInteligente = new lavarropasInteligente("whirlpool","WWN10AB",50,4);
const lavarropasPedro:lavarropasInteligente = new lavarropasInteligente("samsung","LK9",30,8);
const televisorVani:televisor = new televisor("LG","HD475",true,47);

dispositivo.push(impresoraVani);
dispositivo.push(impresoraJuan);
dispositivo.push(lavarropasVani);
dispositivo.push(lavarropasJuan);
dispositivo.push(lavarropasPedro);
dispositivo.push(televisorVani);

for(let i:number = 0; i < dispositivo.length; i++){ 
    console.log("----------------------------------------------------------------------------");
    dispositivo[i].MostrarNombre();
    dispositivo[i].getMostrarInfo();
    dispositivo[i].conectar();        
    dispositivo[i].funcionar();        
    dispositivo[i].desconectar();  
    console.log("----------------------------------------------------------------------------");           
    
};  