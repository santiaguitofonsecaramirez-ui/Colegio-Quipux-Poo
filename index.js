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
        return this.#nombre
    }

    getEdad() {
        return this.#edad
    }

    getId() {
        return this.#id
    }

    getNacionalidad() {
        return this.#nacionalidad
    }
}


class Estudiante extends Persona {




}


class Profesor extends Persona {


}

class Materia {


}

class Tarea {


}



