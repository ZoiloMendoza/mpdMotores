import Motores from "./motores.js";

const sectionsNode = document.querySelectorAll('section');

export const elementos = {
    formulario: document.querySelector('form'),
    sections: Array.from(sectionsNode),
    alertaGuardar: document.getElementById('alertaGuardar'),
    cardsMotores: document.getElementById('cardsMotores'),
    resultadosBusqueda: document.getElementById('resultadosBusqueda'),
    busquedasRecientesList: document.getElementById('busquedasRecientesList'),
    inputBuscar: document.getElementById('inputBuscar'),
}

export let busquedasRecientes = [];
export const motores = new Motores();

