/*
    ===== Código de TypeScript =====
*/

//let habilidades: (boolean | string | number) [] = ['Bash', 'Counter', 'Healing', 100];
//habilidades.push();

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

//interfaces para crear clases
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const PERSONAJE: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

PERSONAJE.puebloNatal = 'Pueblo paleta';

console.table(PERSONAJE);