

function validacion(arrayPeliculas) {


    for(let i = 0; i<arrayPeliculas.length;i++){

        validacion.some(arrayPeliculas[i]);

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
            console.log("OK");
        }

    }

}

validacion("Matrix","ciencia_ficcion","Lilly Wachowski","junio","1 hora",2016,8,"Silvester Stalone","Matt Daemon");



function addUpdateActor(nombre_actor) {

    let peliculas = [];
    let actor = nombre_actor;

    checkArray(peliculas,actor);

    console.log(peliculas);

}


function addUpdateDirector(nombre_director) {

    let peliculas = [];

        let director = peliculas.indexOf(nombre_director);
        if( director === -1 ){
            peliculas.push(director);
        }else{
            peliculas[director] = nombre_director;
        }


}

