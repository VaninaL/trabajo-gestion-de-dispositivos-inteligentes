import { IConectable } from "./interfaz";

export abstract class DispInteligente implements IConectable{
    protected marca:string;
    protected modelo:string;

    constructor(pMarca:string,pModelo:string){
        this.marca = pMarca;
        this.modelo = pModelo;
    }    
    public conectar(): void {
        console.log("El dispositivo se encuentra conectado");       
    }

    public desconectar():void {
        console.log("El dispositivo se encuentra desconectado");        
    }
    protected MostrarInfo():void{
        
    }
    abstract MostrarNombre()
    
    abstract funcionar()

    getMostrarInfo():void{
        console.log(`Usted esta usando un dispositivo marca ${this.marca} que corresponde al modelo ${this.modelo}`);
    }
    setMostrarInfo(pMarca:string,pModelo:string){
        this.marca = pMarca;
        this.modelo = pModelo;
    }
    
};