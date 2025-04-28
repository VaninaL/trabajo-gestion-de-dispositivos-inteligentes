import { controlRemoto } from "./controlRemoto";

export class televisor{
    private control:controlRemoto;
    private marca:string;
    private tipo:string;
    private wifi:boolean;    

    constructor(pMarca:string,pTipo:string,pWifi:boolean){
        this.control = new controlRemoto()
        this.marca = pMarca;
        this.tipo = pTipo;
        this.wifi = pWifi;
        
    }
    encender():void{

    }
    apagar():void{

    }
};