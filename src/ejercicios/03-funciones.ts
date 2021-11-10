/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b: number): number {
    //return (a + b).toString();
    return a + b;
}

//ambas funciones hacen lo mismo
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

//se especifica un valor opcional  y un valor por defecto
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultado = sumar(10, 20);

console.log(resultado);

const resultado2 = multiplicar(30, 20, 3);

console.log(resultado2);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarX: number): void {
    
    personaje.pv += curarX;

    console.log( personaje );
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntois de vida:', this.pv);
    }
}

curar( nuevoPersonaje, 20);