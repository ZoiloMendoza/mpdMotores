import { elementos } from './global.js';
import { initTodosMotores } from './TodosMotores.component.js';
import { initBusquedaComponent } from './busqueda.component.js';
import { initRegistro } from './registro.component.js';

const init = () => {
    initTodosMotores();
    initBusquedaComponent();
    initRegistro();
    window.mostrarSeccion('todosLosMotores');
    elementos.formulario.reset();
}

window.mostrarSeccion = (section) => {
    elementos.sections.forEach((sectionElement) => {
        if(sectionElement.id == section){
            sectionElement.style.display = '';
        }else {
            sectionElement.style.display = 'none';
        }
        if(sectionElement.id == 'todosLosMotores'){
            initTodosMotores();
        }
    });
} 

init();
