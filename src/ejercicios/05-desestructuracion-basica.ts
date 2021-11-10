/*
    ===== Código de TypeScript =====
*/

//Destructuración de objetos
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheran',
        anio: 2015
    }
}


console.log('El volumen actual de: ', reproductor.volumen);
console.log('El segundo actual de: ', reproductor.segundo);
console.log('La cancion actual de: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);

//const { volumen, segundo, cancion, detalles:{ autor } } = reproductor;
//const { volumen, segundo, cancion, detalles:{ autor: autorDetalle } } = reproductor;
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;
console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('La cancion actual de: ', cancion);
console.log('El autor es: ', autor);


//desestructuración de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);

const [p1, p2, p3] = dbz;
const [ , , p30] = dbz;
console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p30);