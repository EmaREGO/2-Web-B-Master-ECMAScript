// FIFO - First in First Out (Primero en entrar, primero en salir)

class Cola {
    constructor() {
        this.elementos = [];
    }

    //Metodo para agregar al final (enqueue)
    agregarElemento(valor) {
        this.elementos.push(valor);
    }

    //Metodo para quitar el primero (dequeue)
    quitarElemento() {
        return this.elementos.shift();
    }

    //Metodo para ver el primero
    verPrimero() {
        return this.elementos[0];
    }

    //Metodo para comprobar si está vacia
    estaVacia(){
        return this.elementos.length === 0;
    }

    mostrarCola(){
        return this.elementos;
    }
}

let filaTortillas = new Cola();

filaTortillas.agregarElemento('Anita');
filaTortillas.agregarElemento('Emanuel');
filaTortillas.agregarElemento('Guisell');

console.log(filaTortillas.mostrarCola());
console.log(filaTortillas.verPrimero());
console.log(filaTortillas.quitarElemento());
console.log(filaTortillas.mostrarCola());