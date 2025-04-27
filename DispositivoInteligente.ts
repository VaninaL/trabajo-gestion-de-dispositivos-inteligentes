import { IConectable } from "./interfaz";

export abstract class DispInteligente implements IConectable{
    protected marca:string;
    protected modelo:string;

    constructor(pMarca:string,pModelo:string){
        this.marca = pMarca;
        this.modelo = pModelo;
    }
    
    public conectar(): void {
        
    }
    public desconectar(): void {
        
    }
    protected mostrarInfo():void{

    }
    abstract funcionar()

}