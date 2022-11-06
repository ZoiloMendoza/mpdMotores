import { elementos, motores } from './global.js';

const cardMotor = (motor) =>{
    const card = 
    `<div class="card mb-3 w-100 mt-1">
        <div class="row g-0">
            <div class="col-md-1">
                <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-11">
            <div class="card-body">
                <h5 class="card-title fw-bold">${motor.punch}</h5>
                <span class="card-text fw-normal">Motor eléctrico<span class="fw-semibold text-black"> ${motor.marca}</span>
                 Potencia:<span class="fw-semibold text-black"> ${motor.potencia}</span>,
                 Frame:<span class="fw-semibold text-black"> ${motor.frame}</span>,
                 <span class="fw-semibold text-black"> ${motor.rpm}</span> rpm,
                 <span class="fw-semibold text-black"> ${motor.hz}</span> Hz,
                 <span class="fw-semibold text-black"> ${motor.linsalida}</span> lineas de salida,
                 <span class="fw-semibold text-black"> ${motor.voltaje}</span> Voltaje,
                 <span class="fw-semibold text-black"> ${motor.amperaje}</span> Amperaje,
                 Modelo:<span class="fw-semibold text-black"> ${motor.modelo}</span>,
                 Serie:<span class="fw-semibold text-black"> ${motor.serie}</span>,
                 <span class="fw-semibold text-black"> ${motor.kva}</span> codigo kVA</span>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                <div class="d-flex justify-content-end gap-3">
                    <button class="btn btn-outline-primary">Actualizar</button>
                    <button onclick="eliminarMotor(${motor.id})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i> Eliminar</button>
                </div>
            </div>
            </div>
        </div>
    </div>`
    
    //`<div class="card col-sm-4 ms-1 mt-1">
    //<img src="${motor.imagen}" class="img-card-custom" alt="...">
    //<div class="card-body">
    //<h5 class="card-title">${motor.alias}</h5>
    //<p class="card-text">Nombre real: ${motor.nombre}</p>
    //<div class="d-flex justify-content-center gap-3">
    //    <button class="btn btn-primary"><i class="fa-solid fa-paintbrush"></i></button>
    //    <button onclick="eliminarMotor(${motor.id})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
    //</div>
    //</div>`;


    return card;
}

const renderizarMotores = (motores) =>{

    const cardsEnDiv = cardsMotores.children;
    if (cardsEnDiv.length > 0) {
        const cards = Array.from(cardsEnDiv);
        cards.forEach((card) =>{
            cardsMotores.removeChild(card);
        })        
    }

    motores.forEach((motor) =>{
        const card = cardMotor(motor);
        elementos.cardsMotores.insertAdjacentHTML('afterbegin', card);
    });
}

window.eliminarMotor = (id) => {
    const eliminar = confirm('¿Deseas eliminar esté Motor?');
    if(eliminar == true){
        const data = motores.equipos.filter((motor) => {
            return motor.id !== id;
        });
        motores.equipos = data;
        motores.guardarStorage();
        renderizarMotores(motores.equipos);
    }
}

export const initTodosMotores = () => {
    renderizarMotores(motores.equipos);
}