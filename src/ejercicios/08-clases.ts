/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    
    constructor(
        public nombre: string,
        public direccion: string
    ){

    }
}

class Heroe extends PersonaNormal {
    //private alterEgo: string;
    //public edad: number;
    //static nombreReal: number;

    //sin identificador de acceso son publicas por default
    //public alterEgo: string;
    //public edad: number;
    //public nombreReal: number;

    //imprimirNombre() {
        //return this.alterEgo + ' ' + this.nom
    //}

    //aqui se crea constructor y se definen atributos
    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ){
        super(nombreReal, 'NY');
        
    }
}

/*
interface Personaje2{
    alterEgo: string;
    edad: number;
    nombreReal: number;
}
*/

const ironman = new Heroe('ironman', 45, 'Tony');
//const spirderman: Personaje2 = { alterEgo:'', edad: 20, nombreReal:213};

console.log(ironman);