export default class Cl_cliente{
    constructor(nombre, cantIn, camb50, camb20, camb10){
        this.nombre=nombre;
        this.cantIn=cantIn;
        this.camb50=camb50;
        this.camb20=camb20;
        this.camb10=camb10;
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre
    }
    set cantIn(cI){
        this._cantIn=cI;
    }
    get cantIn(){
        return this._cantIn
    }
    set camb50(c50){
        this._camb50=c50;
    }
    get camb50(){
        return this._camb50
    }
    set camb20(c20){
        this._camb20=c20;
    }
    get camb20(){
        return this._camb20
    }
    set camb10(c10){
        this._camb10=c10;
    }
    get camb10(){
        return this._camb10
    }
    calcCantBill(){
        return this._camb10 + this._camb20 + this._camb50;
    }
}