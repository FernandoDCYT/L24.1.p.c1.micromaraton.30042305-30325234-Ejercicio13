import Cl_casa from "./Cl_casa.js";
import Cl_cliente from "./Cl_cliente.js";

let cli1 = new Cl_cliente("Luis", 100, 2, 0, 0)
let cli2 = new Cl_cliente("Ana", 50, 0, 2, 1)
let cli3 = new Cl_cliente("Jose", 100, 0, 4, 2)
let cli4 = new Cl_cliente("Carmen", 20, 0, 0, 2)
let cli5 = new Cl_cliente("Eva", 50, 0, 1, 3)

let casa = new Cl_casa();

casa.procesarCliente(cli1);
casa.procesarCliente(cli2);
casa.procesarCliente(cli3);
casa.procesarCliente(cli4);
casa.procesarCliente(cli5);

let salida = document.getElementById("salida");

salida.innerHTML=`
${cli1.nombre} se lleva ${cli1.calcCantBill()} billetes <br>
${cli2.nombre} se lleva ${cli2.calcCantBill()} billetes <br>
${cli3.nombre} se lleva ${cli3.calcCantBill()} billetes <br>
${cli4.nombre} se lleva ${cli4.calcCantBill()} billetes <br>
${cli5.nombre} se lleva ${cli5.calcCantBill()} billetes <br>
<br> 
<b><h2>Se cambiaron $${casa.acumMontCamb} </b></h2>

Quedaron ${casa.acumB100} de $100 <br>
Quedaron ${casa.acumB50} de $50 <br>
Quedaron ${casa.acumB20} de $20 <br>
Quedaron ${casa.acumB10} de $10 <br>

`