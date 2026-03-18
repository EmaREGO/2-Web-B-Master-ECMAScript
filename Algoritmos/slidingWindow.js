/*
[2,1,5,4,1,3,2]
toma un pedazo (ventana de 3 que va deslizando)
[2,1,5] =8
luego se mueve un paso a la derecha
[1,5,4] = 10
y asi luego
encontrar cual de esos conjuntos de 3 es la mas larga
Mal seria sumar todo y nuevamenten
inteligente Quitar el numero que ya no esta 
y luego agregar el numero nuevo

*/

function obtenerSumaMaxima(arregloNumeros, tamVentana) {

    //Validamos que no este vacia
    if(tamVentana > arregloNumeros.length){
        return null;
    }

    let sumaActualDeVentana = 0; //Al principio comienza en cero

    //1-Calculamos la suma de la primera ventana
    for(let indice = 0; indice < tamVentana; indice++){
        sumaActualDeVentana += arregloNumeros[indice];
        console.log(`Sumando: ${arregloNumeros[indice]} --> suma actual: ${sumaActualDeVentana}`);
    }

    let sumaMaximaEncontrada = sumaActualDeVentana;

    console.log('--- Primera Ventana ---')

    //2-Nos movemos a la otra ventana
    for (let indice = tamVentana; indice < arregloNumeros.length; indice++){ //Deslizamos la ventana:
        let numeroQueSale = arregloNumeros[indice -tamVentana]; //Quitamos el numero que ya no esta
        let numeroQueEntra = arregloNumeros[indice]; //Y agregamos el nuevo numero
        
        console.log(`--- Movemos la ventana ---`);
        console.log(`Numero que sale: ${numeroQueSale}`);
        console.log(`Numero que entra: ${numeroQueEntra}`);

        //Ajustar la suma
        sumaActualDeVentana = sumaActualDeVentana - numeroQueSale + numeroQueEntra;

        //Comparamos con el Maximo
        if(sumaActualDeVentana > sumaMaximaEncontrada){
            sumaMaximaEncontrada = sumaActualDeVentana
            console.log(`Nuevo numero maximo encontrado ${sumaMaximaEncontrada}`);
        } else {
            console.log(`El maximo encontrado sigue siendo ${sumaMaximaEncontrada}`);
        }
        console.log(`______`);
    }

    return sumaMaximaEncontrada;
}

//Se puede usar el algoritmo para encontrar patrones
let visitasPorMinuto = [10,23,2,49,50,3,56,2,5];
let maxTrafico = obtenerSumaMaxima(visitasPorMinuto,3);
console.log(maxTrafico);