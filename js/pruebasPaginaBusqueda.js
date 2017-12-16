let funciones = [
    function () {
        pruebaDevolverPelicula("matrix")
    },
    function () {
        pruebaDevolverPeliculaSimilar("ciencia_ficcion")
    },
    function () {
        pruebaDevolverGenero("comedia")
    },
    function () {
        pruebaPeliculaPorActor("Paco León")
    },
    function () {
        pruebaDevolverDirector("Lilly Wachowski")
    },
];

/**
 * Funcion global que hace todas las pruebas
 */

function pruebasBusqueda() {
    for (let i = 0; i < funciones.length; i++) {
        setTimeout(function () {
            funciones[i]();
        }, 2000 * i);
    }

}

/**
 * Funcion para probar el metodo de buscar por Nombre o descripcion
 * @param nombreDescripcion Nombre para buscar
 */
function pruebaDevolverPelicula(string) {
    if (string !== undefined) {
        let inputPelicula = $('#peliculabuscada');
        inputPelicula.val(string)
        devolverPelicula();
    }
}

/**
 * Funcion para probar el metodo de buscar por Nombre o descripcion
 * @param nombreDescripcion Nombre para buscar
 */
function pruebaDevolverPeliculaSimilar(string) {
    if (string !== undefined) {
        let inputPelicula = $('#peliculasimilar');
        inputPelicula.val(string)
        devolverPeliculaSimilar();
    }
}

/**
 * Funcion para probar el metodo de buscar por Personaje
 * @param personaje Nombre del personaje a buscar
 */
function pruebaDevolverGenero(string) {
    if (string !== undefined) {
        let inputGenero = $('#busquedagenero');
        inputGenero.val(string)
        devolverGenero();
    }
}

/**
 * Funcion para probar el metodo de buscar por genero
 * @param personaje Nombre del personaje a buscar
 */
function pruebaPeliculaPorActor(string) {
    if (string !== undefined) {
        let inputActor= $('#busquedaactor');
        inputActor.val(string)
        peliculaPorActor();
    }
}

/**
 * Funcion para probar el metodo de buscar por plataforma
 * @param personaje Nombre del personaje a buscar
 */
function pruebaDevolverDirector(string) {
    if (string !== undefined) {
        let inputDirector = $('#busquedadirector');
        inputDirector.val(string)
        devolverDirector();
    }
}



