// Funcion de countdown mas basico
function countdown(n){
    //Caso base, cuando n llegue a 0, termine
    if (n === 0){
        console.log('Fin');
        return;
    }

    //Accion Actual
    console.log(n);

    // Llamada recursiva, reducir el problema
    countdown(n-1);
}

countdown(5);