
export class controlRemoto {
    private cantidadPilas:number;
    private tamaño:string; 
    private estaEncendido:boolean;

    constructor(pCantidadPilas:number,pTamaño:string,pEstaEncendido:boolean) {
        this.cantidadPilas = pCantidadPilas;
        this.tamaño = pTamaño;
        this.estaEncendido = pEstaEncendido;
    }

    encender():boolean {
        if(this.estaEncendido){
            return true;            
        }else{
            return false;
        }
        
    }
    apagar():void {         
    
    }
};


