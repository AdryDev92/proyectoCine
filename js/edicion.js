/*
 Valida los campos de una pelicula,
 asegurandose de que no puedan ser nulos, vacios o undefined.
 */


let arrayPeliculas = [
    new Pelicula("matrix",["ciencia_ficcion"],"Lilly Wachowski","Keanu Reeves","1999","junio","Muy Buena","60 min","5"),
    new Pelicula("matrix reloaded",["ciencia_ficcion"],"Lilly Wachowski","Keanu Reeves","2001","junio","Muy Buena","120 min","5"),
    new Pelicula("el francotirador",["accion"],"Clint Eastwood","Bradley Cooper", "2014","febrero","Muy buena","90 min","4"),
    new Pelicula("blade",["comedia"],"Stephen Norrington","Wesley Snipes","1998","mayo","Normalita","60 min","3"),
    new Pelicula("hulk",["romantica"],"Jack Kirby","Mark Ruffalo","1962","octubre","Mala","180 min","5"),
    new Pelicula("toc toc",["comedia"],"Vicente Villanueva","Paco León","2017","octubre","Muy buena","96 min","9"),
    new Pelicula("thor ragnarok",["ciencia ficcion"],"Taika Waititi","Chris Hemsworth","2017","octubre","Buena","130 min","8"),
    new Pelicula("blade runner",["ciencia ficcion"],"Denis Villeneuve","Ryan Gosling","2017","octubre","Buena","163 min","5"),
    new Pelicula("it",["miedo"],"Andrés Muschietti","Sophia Lilis","2017","septiembre","normal","135 min","5")
];

function validacion(arrayPeliculas) {


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

    for(let i = 0; i<arrayPeliculas.length;i++){

        validacion.some(arrayPeliculas[i]);

        /*if(  nombre
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
        }*/

    }


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

