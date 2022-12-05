import { elementos, motores } from "./global.js";

const itemSearch = (motor) => {
    const li = `<li class="list-group-item ms-3">
    <img src="${motor.os}" class="img-list" alt=""> ${motor.os} | ${motor.punch}
    </li>`;
    return li;
}

const itemBusquedaReciente = (term) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = term;
    li.addEventListener('click', seleccionarBusqueda);
    return li;
}

const limpiarBusquedas = () => {
    const busquedas = busquedasRecientesList.children;
    if(busquedas.length > 0) {
        const busquedasLi = Array.from(busquedas);
        busquedasLi.forEach((li) => {
            busquedasRecientesList.removeChild(li);
        });
    }
}

window.buscarMotor = (e) => {

    const term = e.target.value.toLowerCase();
    if(!term){
        return;
    }
    const motoresLista = resultadosBusqueda.children;
    if(motoresLista.length > 0){
        const motoresChield = Array.from(motoresLista);
        motoresChield.forEach((item) => {
            resultadosBusqueda.removeChild(item);
        });
    }
    limpiarBusquedas();

    const resultado = motores.equipos.filter((motor) => {
        const nombre = motor.os.toLowerCase();
        const alias = motor.punch.toLowerCase();
        return nombre.includes(term) || alias.includes(term);
    });

    resultado.forEach((motor) => {
        const li = itemSearch(motor);
        resultadosBusqueda.insertAdjacentHTML('afterbegin', li);
    });

    if(!motores.busquedas.includes(term)) {
        motores.busquedas.push(term);
        motores.guardarStorageBusqueda();
    }

    motores.busquedas.forEach((termino) => {
        const li = itemBusquedaReciente(termino);
        elementos.busquedasRecientesList.append(li);
    });
}

window.seleccionarBusqueda = (e) => {
    const busqueda = e.target.innerText;
    inputBuscar.value = busqueda;
    const event = new Event('change');
    inputBuscar.dispatchEvent(event);
}

export const initBusquedaComponent = () => {
    motores.busquedas.forEach((termino) => {
      const li = itemBusquedaReciente(termino);
      elementos.busquedasRecientesList.append(li);
    });
}