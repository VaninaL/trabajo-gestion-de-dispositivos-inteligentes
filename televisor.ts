import { controlRemoto } from "./controlRemoto";
import { DispInteligente } from "./DispositivoInteligente";

export class televisor extends DispInteligente{
    private control:controlRemoto;
    private wifi:boolean;
    private pulgadas:number;
    public nombre:string;    

    constructor(pMarca:string,pModelo,pWifi:boolean,pPulgadas:number){
        super(pMarca,pModelo);
        this.control = new controlRemoto(2,"mediano",true);
        this.marca = pMarca;
        this.wifi = pWifi;
        this.nombre = "televisor";        
    }
    
    MostrarNombre():void {
        console.log(this.nombre); 
    }
    
    funcionar(){
        if (this.control.encender()){
            console.log("El televisor esta encendido");            
        }else{
            console.log("El televisor esta apagado"); 
        }
    }
};

