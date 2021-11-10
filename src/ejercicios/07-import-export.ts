/*
    ===== Código de TypeScript =====
*/

import { Producto, calculaISV } from "./06-destructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 150
    }, {
        desc: 'Telefono 2',
        precio: 350
    }
];


const [total, isv] = calculaISV( carritoCompras );

console.log('Total', total);
console.log('ISV', isv);