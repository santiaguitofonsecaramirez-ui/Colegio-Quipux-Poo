//Equipo Santiago Fonseca Ramirez,Nicolas Montoya Castro
const readlineSync = require('readline-sync');
//Creacion de Clase Persona,Estudiante,Profesor,Tarea,Materia
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


    mostrarTareas() {
        console.log("Tareas de la materia:");

        for (let i = 0; i < this.#tareas.length; i++) {
        this.#tareas[i].mostrarInfo();
}
    }
}



class Tarea {

    #nombre;
    #descripcion;
    #fechaEntrega;

    constructor(nombre, descripcion, fechaEntrega) {
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#fechaEntrega = fechaEntrega;
    }

    getNombre() {
        return this.#nombre;
    }

    getDescripcion() {
        return this.#descripcion;
    }

    getFechaEntrega() {
        return this.#fechaEntrega;
    }

    mostrarInfo() {
        console.log("Información de la tarea");
        console.log("Nombre:", this.getNombre());
        console.log("Descripción:", this.getDescripcion());
        console.log("Fecha de entrega:", this.getFechaEntrega());
    }
}

//Creacion de Instancias(Objetos) 2 por cada clase
const profesor1 = new Profesor("Iveth", 30 , "12345678", "Colombiana","Sistemas");

const profesor2 = new Profesor("Luz Emilia", 68 , "98765432", "Colombiana", "Física");



const estudiante1 = new Estudiante("Nicolás Montoya", 16 ,"1020304589", "Colombiano", "Undécimo");

const estudiante2 = new Estudiante( "Santiago Fonseca",16, "11223344", "Colombiano", "Undécimo");

const materia1 = new Materia( "Sistemas", profesor1 );

const materia2 = new Materia( "Física", profesor2);



const tarea1 = new Tarea( "Tarea 1", "Hacer una página web", "2026-08-13");

const tarea2 = new Tarea( "Tarea 2", "Preparar presentación sobre máquinas simples", "2026-08-20");


//Información esencial de las Clases

materia1.agregarTarea(tarea1);
materia2.agregarTarea(tarea2);



estudiante1.mostrarInfo();

console.log("------------------------------");

estudiante2.mostrarInfo();

console.log("------------------------------");

profesor1.mostrarInfo();

console.log("------------------------------");

profesor2.mostrarInfo();


console.log("------------------------------");

materia1.mostrarInfo();
materia1.mostrarTareas();

console.log("------------------------------");

materia2.mostrarInfo();

tarea1.mostrarInfo();

tarea2.mostrarInfo();   

//Interacción con Consola
let salir = false;
 
while (!salir) {
    console.log("\n SISTEMA ESCOLAR ");
    console.log("1. Ver estudiantes");
    console.log("2. Ver profesores");
    console.log("3. Ver materias y tareas");
    console.log("4. Salir");
 
    const opcion = readlineSync.question("Elige una opción: ");
    console.log("------------------------------");
 
    if (opcion === "1") {
        estudiantes.forEach(e => e.mostrarInfo());
    } else if (opcion === "2") {
        profesores.forEach(p => p.mostrarInfo());
    } else if (opcion === "3") {
        materias.forEach(m => { m.mostrarInfo(); m.mostrarTareas(); });
    } else if (opcion === "4") {
        console.log("Hasta luego.");
        salir = true;
    } else {
        console.log("Opción no válida.");
    }
}
