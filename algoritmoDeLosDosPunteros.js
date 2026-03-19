const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo", "Paco", "Pedro", "Dilan"];

function encontrarPareja(arr) {

    let inicio = 0;
    let siguiente = 1;

    let limpio = [];
    while (siguiente < arr.length) {   
        //Compara las iniciales de los nombres en los punteros
        //Si coinciden devuelven el par
        if (arr[inicio] && arr[inicio].length > 0 && arr[siguiente] && arr[siguiente].length > 0 ){
            if(arr[inicio].charAt(0).toLowerCase() === arr[siguiente].charAt(0).toLowerCase()){
            limpio.push([arr[inicio], arr[siguiente]]);
            }
        //Avanza los punteros si no coinciden
        }
        inicio++
        siguiente++
        
    }

    return limpio; //Si no encuentra ningun par
}

console.log(encontrarPareja(invitados));