import { elementos, motores } from "./global.js";

window.guardarMotor = (e) => {
    e.preventDefault();
    const tiempoActual = new Date();
    const inputsNode = e.target.querySelectorAll('input');
    const inputs = Array.from(inputsNode);
    let motor = {};
    inputs.forEach((input) =>{
        motor[input.name] = input.value;
    });
    motor.id = tiempoActual.getTime();
    motores.equipos.push(motor);
    motores.guardarStorage();
    //console.log(motores);
    elementos.alertaGuardar.style.display = '';
    setTimeout(() => {
        elementos.alertaGuardar.style.display = 'none';
        window.mostrarSeccion('todosLosMotores');
    }, 3000);
}
 
export const initRegistro = () => {
    elementos.alertaGuardar.style.display = 'none';
}