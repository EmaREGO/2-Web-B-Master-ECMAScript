
import {agregarProducto, eliminarProducto, mostrarLista} from "./listaCompras.js"

agregarProducto("Coca Cola");
agregarProducto("Pan");
agregarProducto("Coca Cola");

mostrarLista();

eliminarProducto("Coca Cola");
mostrarLista();