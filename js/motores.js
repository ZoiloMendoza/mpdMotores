export default class Motores {

    #equipos = [];
    #busquedas = [];
    constructor() {
        this.cargarLocalEquipos();
        this.cargarLocalBusquedas();
    }

    get equipos(){
        return this.#equipos;
    }
    get busquedas(){
        return this.#busquedas;
    }
    set equipos(equipos){
        this.#equipos = equipos;
    }
    set busquedas(busquedas){
        this.#busquedas = busquedas;
    }

    cargarLocalEquipos() {
        const motoresLocales = localStorage.getItem('motores');
        if(motoresLocales) {
            this.#equipos = JSON.parse(motoresLocales) //&& []; si el arrglo es nulo, inicialo vacio. funciona solo si el elemnto regresa undefine
            //renderizarMotores();
        }
    }
    cargarLocalBusquedas() {
        const busquedasLocales = localStorage.getItem('busquedas');
        if(busquedasLocales) {
            this.#busquedas = JSON.parse(busquedasLocales);
        }
    }
    guardarStorage(){
        const motoresJson = JSON.stringify(this.equipos);
        localStorage.setItem('motores', motoresJson);
    }

    guardarStorageBusqueda(){
        const busquedasJson = JSON.stringify(this.busquedas);
        localStorage.setItem('busquedas', busquedasJson);
    }

}