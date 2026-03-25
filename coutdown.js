// Funcion de countdown mas basico
function countdown(n){
    //Caso base, cuando n llegue a 0, termine
    console.log('Entrando con n =',n)
    if (n === 0){
        console.log('Caso base alcanzado');
        return;
    }

    //Accion Actual
    console.log(n);

    // Llamada recursiva, reducir el problema
    countdown(n-1);
    console.log('Saliendo de n=',n)
}

countdown(5);