/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia','Gabriel']
}

function imprimirHijos( pasajero: Pasajero): void {
    //si la propiedad opcional existe entonces aplica el metodo, sino, tratalo como undefined
    const cuantosHijos = pasajero.hijos?.length;
    console.log( cuantosHijos );
}

imprimirHijos(pasajero2);