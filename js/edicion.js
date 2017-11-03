/*
 Valida los campos de una pelicula,
 asegurandose de que no puedan ser nulos, vacios o undefined.
 */


function validacion(nombre,genero,descripcion, director, actores,duracion,anio,mes,nombre_actor,nombre_director) {


    //esta parte recoge los datos directamente de los inputs

    /*let nombre = document.getElementById('nombre').value;
    let genero = document.getElementById('genero').value;
    let descripcion = document.getElementById('descripcion').value;
    let director = document.getElementById('director').value;
    let actores = document.getElementById('actores').value;
    let duracion = document.getElementById('duracion').value;
    let anio = document.getElementById('anio').value;
    let mes = document.getElementById('mes').value;
    let nombre_actor = document.getElementById('nombre_actor').value;
    let nombre_director = document.getElementById('nombre_director').value;*/

  validacion(nombre);
  validacion(genero);
  validacion(descripcion);
  validacion(director);
  validacion(actores);
  validacion(duracion);
  validacion(anio);
  validacion(mes);
  validacion(nombre_actor);
  validacion(nombre_director);

        if(  nombre
            && genero
            && descripcion
            && director
            && actores
            && duracion
            && anio
            && mes
            && nombre_actor
            && nombre_director)
        {
            console.log("TODO OK");
        }

    }

validacion("Matrix","ciencia ficcion","una breve descripcion","director_X","actores",120,2017,"Julio","Matt Daemon","Un director");

}


function addUpdateActor(nombre_actor) {

    let peliculas = [];
    let actor = nombre_actor;

    checkArray(peliculas,actor);

    console.log(peliculas);


}


function addUpdateDirector(nombre_director) {

    let peliculas = [];

        let director = peliculas.indexOf(nombre_director);
        if( director == -1 ){
            peliculas.push(director);
        }else{
            peliculas[director] = nombre_director;
        }


}

