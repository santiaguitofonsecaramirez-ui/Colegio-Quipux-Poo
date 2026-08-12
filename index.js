class Persona {
    #nombre;
    #edad;
    #id;
    #nacionalidad;

    constructor(nombre, edad, id, nacionalidad) {

        this.#nombre = nombre;
        this.#edad = edad;
        this.#id = id;
        this.#nacionalidad = nacionalidad;
    }

    getNombre() {
        return this.#nombre;
    }

    getEdad() {
        return this.#edad;
    }

    getId() {
        return this.#id;
    }

    getNacionalidad() {
        return this.#nacionalidad;
    }

    mostrarInfo() {
        console.log("Esta es la información de la persona");
        console.log("Nombre:", this.getNombre());
        console.log("Edad:", this.getEdad());
        console.log("Id:", this.getId());
        console.log("Nacionalidad:", this.getNacionalidad());
    }
}


class Estudiante extends Persona {

    #grado;

    constructor(nombre, edad, id, nacionalidad, grado) {

        super(nombre, edad, id, nacionalidad);

        this.#grado = grado;
    }

    getGrado() {
        return this.#grado;
    }

    mostrarInfo() {

        super.mostrarInfo();

        console.log("Grado:", this.getGrado());
    }
}


class Profesor extends Persona {

    #especialidad;

    constructor(nombre, edad, id, nacionalidad, especialidad) {

        super(nombre, edad, id, nacionalidad);

        this.#especialidad = especialidad;
    }

    getEspecialidad() {
        return this.#especialidad;
    }

    mostrarInfo() {

        super.mostrarInfo();

        console.log("Especialidad:", this.getEspecialidad());
    }
}


class Materia {

    #nombre;
    #profesor;
    #tareas;

    constructor(nombre, profesor) {

        this.#nombre = nombre;
        this.#profesor = profesor;
        this.#tareas = [];
    }

    getNombre() {
        return this.#nombre;
    }

    getProfesor() {
        return this.#profesor;
    }

    agregarTarea(tarea) {

        this.#tareas.push(tarea);
    }

    mostrarInfo() {

        console.log("Información de la materia");
        console.log("Nombre:", this.getNombre());
        console.log("Profesor:", this.getProfesor().getNombre());
    }
}

class Tarea {

    #nombre;
    #descripcion;
    #fecha_entrega;

    constructor(nombre, descripcion, fecha_entrega) {

        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#fecha_entrega = fecha_entrega;
    }

    getNombre() {
        return this.#nombre;
    }

    getDescripcion() {
        return this.#descripcion;
    }

    getFecha_entrega() {
        return this.#fecha_entrega;
    }

    mostrarInfo() {

        console.log("Información de la tarea");
        console.log("Nombre:", this.getNombre());
        console.log("Descripción:", this.getDescripcion());
        console.log("Fecha de entrega:", this.getFecha_entrega());
    }
}


const profesor1 = new Profesor("iveth", 30, "12345678", "colombiana", "sistemas");
const profesor2 = new Profesor("Luz emilia", 68, "98765432", "colombiana", "Física");

const estudiante1 = new Estudiante("Nicolas montoya", 16, "1020304589", "colombiano", "undecimo");
const estudiante2 = new Estudiante("Santiago fonseca", 16, "11223344", "colombiana", "undecimo");

const materia1 = new Materia("sistemas", profesor1);
const materia2 = new Materia("Física", profesor2);


const tarea1 = new Tarea("Tarea 1", "hacer una pagina web", "2026-08-13");

const tarea2 = new Tarea("Tarea 2", "Preparar presentación sobre maquinas simples", "2026-08-20");







estudiante1.mostrarInfo();
estudiante2.mostrarInfo();

profesor1.mostrarInfo();
profesor2.mostrarInfo();



materia1.agregarTarea(tarea1);
materia1.agregarTarea(tarea2);


materia2.agregarTarea(tarea1);
materia2.agregarTarea(tarea2);


materia1.mostrarInfo();
materia2.mostrarInfo();

tarea1.mostrarInfo();

tarea2.mostrarInfo();   




