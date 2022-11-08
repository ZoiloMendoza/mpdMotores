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
                 Potencia:<span class="fw-semibold text-black"> ${motor.power}</span>,
                 Frame:<span class="fw-semibold text-black"> ${motor.frame}</span>,
                 <span class="fw-semibold text-black"> ${motor.rpm}</span> rpm,
                 <span class="fw-semibold text-black"> ${motor.hz}</span> Hz,
                 <span class="fw-semibold text-black"> ${motor.outlines}</span> lineas de salida,
                 <span class="fw-semibold text-black"> ${motor.voltaje}</span> Voltaje,
                 <span class="fw-semibold text-black"> ${motor.amperaje}</span> Amperaje,
                 Modelo:<span class="fw-semibold text-black"> ${motor.model}</span>,
                 Serie:<span class="fw-semibold text-black"> ${motor.sn}</span>,
                 <span class="fw-semibold text-black"> ${motor.kva}</span> codigo kVA</span>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                <div class="d-flex justify-content-end gap-3">
                    <button onclick="actualizarMotor(${motor.id})" class="btn btn-outline-primary">Actualizar</button>
                    <button onclick="eliminarMotor(${motor.id})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i> Eliminar</button>
                </div>
            </div>
            </div>
        </div>
    </div>`
    return card;
}

const renderizarMotores = (motores) =>{

    const cardsEnDiv = elementos.cardsMotores.children;
    if (cardsEnDiv.length > 0) {
        const cards = Array.from(cardsEnDiv);
        cards.forEach((card) =>{
            elementos.cardsMotores.removeChild(card);
        })        
    }

    motores.forEach((motor) =>{
        const card = cardMotor(motor);
        elementos.cardsMotores.insertAdjacentHTML('afterbegin', card);
    });
}

window.eliminarMotor = (id) => {
    const eliminar = confirm('¿Deseas eliminar esté Motor?');
    if(eliminar == true) {
        const data = motores.equipos.filter((motor) => {
            return motor.id !== id;
        });
        motores.equipos = data;
        motores.guardarStorage();
        renderizarMotores(motores.equipos);
    }
}


window.actualizarMotor = (id) => {
    const data = motores.equipos.filter((motor) => {
         if(motor.id == id) {
            const claves = Object.keys(motor);
            const valores = Object.values(motor);
            let contador = 0;
            claves.forEach((clave) => {
                let ejemplo = document.getElementById(clave);
            //document.getElementById(clave).value = clave.valor;
            if(ejemplo !== null) {
                console.log(ejemplo.value = valores[contador]);
                contador++
            }

            })
            
           // 
           //console.log(formulario.user);
           // console.log(motor.user)

           // return motores.equipos;
         }
         
    });
    window.mostrarSeccion('registro');
    
    
}


export const initTodosMotores = () => {
    renderizarMotores(motores.equipos);
}