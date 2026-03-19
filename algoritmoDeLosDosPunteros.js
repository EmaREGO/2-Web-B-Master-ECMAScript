const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {

    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        //Compara las iniciales de los nombres en los punteros
        //Si coinciden devuelven el par
        if(arr[inicio].charAt(0).toLowerCase() === arr[siguiente].charAt(0).toLowerCase()){
            return [arr[inicio], arr[siguiente]];
        }
        inicio++
        siguiente++
        //Avanza los punteros si no coinciden
    }

    return null; //Si no encuentra ningun par
}

console.log(encontrarPareja(invitados));