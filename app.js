// app.js
import { registrarDestino, mostrarItinerario } from "./viajes.js";
// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión", 1);
    registrarDestino("Londres", "2024-07-01", "Tren", 4);
    registrarDestino("New York", "2024-08-20", "Avión", 2);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();