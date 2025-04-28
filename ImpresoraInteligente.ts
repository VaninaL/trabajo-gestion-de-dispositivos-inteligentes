import { DispInteligente } from "./DispositivoInteligente";

export class impresoraInteligente extends DispInteligente{
    private copias:number;
    private contador:number = 0;
    public nombre:string;

constructor(pMarca:string,pModelo:string,pCopias:number){
    super(pMarca,pModelo)
    this.copias = pCopias;
    this.contador = 0;
    this.nombre = "impresora";
    }   
    
    MostrarNombre():void {        
        console.log(this.nombre) 
    }
    funcionar(){        
        if(this.contador  <= 100){
            console.log(`Su impresora se esta preparando para imprimir ${this.copias} copias`);            
        }else {
            console.log(" Su impresora necesita descansar ");            
        }            
    }
        
    imprimir(){    
        this.contador = this.contador + this.copias;
        console.log(" Imprimiendo " + this.contador + " copias ");        
    }    
};
const impresoraVani:impresoraInteligente = new impresoraInteligente("epson","xp 211",10);
impresoraVani.MostrarNombre()