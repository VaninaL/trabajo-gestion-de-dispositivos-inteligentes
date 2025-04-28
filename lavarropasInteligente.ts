import { DispInteligente } from "./DispositivoInteligente";

export class lavarropasInteligente extends DispInteligente{
    private tiempo:number;
    private kilos:number;
    public nombre:string;

    constructor(pMarca:string,pModelo:string,pTiempo:number,pKilos:number){
        super(pMarca,pModelo);
        this.tiempo = pTiempo;
        this.kilos = pKilos; 
        this.nombre = "lavarropas";   
    }

    MostrarNombre():void {        
        console.log(this.nombre) 
    }

    funcionar(){
        console.log("Introduzca la ropa"); 
        if(this.kilos <= 6 && this.tiempo < 40){
            console.log("Lavarropas funcionando");  
        } else{
            if(this.kilos > 6){
                console.log("Ha superado el peso permitido de ropa");
            } 
            if(this.tiempo > 40){
                console.log("Introduzca un valor menor a 40 minutos");
            }           
        }          
    }
};