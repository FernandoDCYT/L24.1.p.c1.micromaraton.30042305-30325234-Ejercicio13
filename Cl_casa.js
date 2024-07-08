export default class Cl_casa{
    constructor(){
        this.acumMontCamb=0;
        this.acumB10=20;
        this.acumB20=10;
        this.acumB50=6;
        this.acumB100=0;
    }
    procesarCliente(c){
        this.acumMontCamb+= c.camb10*10 + c.camb20*20 + c.camb50*50;
        if (c.cantIn == 100){
            this.acumB100 ++
        }
        if (c.cantIn == 50){
            this.acumB50 ++
        }
        if(c.cantIn == 20){
            this.acumB20++
        }
        if(c.cantIn == 10){
            this.acumB10 ++
        }
        if(c.camb50 > 0){
            this.acumB50-=c.camb50;
        }
        if(c.camb20 > 0){
            this.acumB20-=c.camb20
        }
        if (c.camb10> 0){
            this.acumB10-=c.camb10
        }
    }
}