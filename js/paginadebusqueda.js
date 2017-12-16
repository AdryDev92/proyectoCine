let empty = "No se han encontrado resultados";
let blankScape = "El campo no puede estar vacio";
let tablaBusqueda= ["nombre", "genero", "director", "actores", "anio", "mes", "descripcion", "duracion", "puntuacion"];

function devolverPelicula() {
    cleanErrors();

    let h5 = $("#h5FunctionDevPel");
    let inputPelicula = $('#peliculabuscada');
    let parametro = inputPelicula.val().toLowerCase().trim();
    cleanErrors(h5, inputPelicula);

    if (parametro !== ""){
        buscarPeliPor("nombre", parametro, inputPelicula, "descripcion");
    }else {
        printError(inputPelicula, blankScape, "", h5, true);
    }
}

function devolverPeliculaSimilar() {
    cleanErrors();

    let h5 = $("#h5FunctionSimilar");
    let inputPelicula = $("#peliculasimilar");
    let parametro = inputPelicula.val().toLowerCase().trim();
    cleanErrors(h5, inputPelicula);
    let peliculaParaBuscar = "";
    let resultado = [];

    for (pelicula of arrayPeliculas){
        if ((pelicula.nombre).indexOf(parametro) !== -1){
            peliculaParaBuscar = pelicula;
        }
    }

    if(parametro !== ""){
        for(pelicula of arrayPeliculas){
            let peliculaGenero = (pelicula.genero === peliculaParaBuscar.genero);

            if (peliculaGenero){
                $(inputPelicula).addClass("inputCorrect");

                resultado.push(pelicula);
            }
        }
        resultado.length === 0 ?
            $(inputPelicula).addClass("inputCorrect") :
            createTable(resultado, tablaBusqueda,
                "#tablaResultados", false);
    }else{
        printError(inputPelicula, blankScape, "", h5, true);
    }
}

function peliculaPorActor() {
    cleanErrors();

    let h5 = $("#h5FunctionActor");
    let inputActor = $("#busquedaactor");
    let parametro = inputActor.val().toLowerCase().trim();
    cleanErrors(h5, inputActor);

    if(parametro !== ""){
        buscarPeliPor("nombre", buscarPeliculaPorActor(parametro), inputActor);
        $(inputActor).addClass("inputCorrect");
    }else{
        printError(inputActor, blankScape, "", h5, true);
    }
}

function devolverGenero() {
    cleanErrors();

    let h5 = $("#h5FunctionGenero");
    let inputGenero = $('#busquedagenero');
    let parametro = inputGenero.val().toLowerCase().trim();
    cleanErrors(h5, inputGenero);

    if ( parametro !== ""){
        buscarPeliPor("genero", parametro, inputGenero);
        $(inputGenero).addClass("inputCorrect");
    }else{
        printError(inputGenero, blankScape, "", h5, true);
    }
}

function devolverDirector() {
    cleanErrors();

    let h5 = $("#h5FunctionDirector");
    let inputDirector = $('#busquedadirector');
    let parametro = inputDirector.val().toLowerCase().trim();
    cleanErrors(h5, inputDirector);

    if ( parametro !== ""){
        buscarPeliPor("director", parametro, inputDirector);
        $(inputDirector).addClass("inputCorrect");
    }else{
        printError(inputDirector, blankScape, "", h5, true);
    }
}





function buscarPeliPor(...CondicionBusqueda) {
    let h5 = $("#h5tablaResultados");

    let condition = CondicionBusqueda[0];
    let valorBuscar = CondicionBusqueda[1];
    let condition2 = CondicionBusqueda[3];
    let input = CondicionBusqueda[2];

    let resultado1 = findData(condition, valorBuscar);
    let resultado2 = findData(condition2 !== undefined ? condition2 : "", valorBuscar);

    if (resultado1.length > 0 || resultado2.length > 0){
        input.addClass("input Incorrecto");
        if (resultado2[0] === ""){
            return console.log(resultado1);
            // return createTable(resultado1, tablaBusqueda,
            //     "#tablaResultados", false);
        }
        return console.log(resultado1, resultado2);
        // return createTable(arrayMerge(resultado1, resultado2), tablaBusqueda,
        //     "#tablaResultados", false);
    }
    printError(h5, empty, "", h5, true);
}

function findData(condicion, valorBuscar) {
    if (condicion !== ""){
        valorBuscar = valorBuscar.toLowerCase().trim();
        return (arrayPeliculas.filter(x => x[condicion].indexOf(valorBuscar) !== -1));
    }else{
        return "";
    }
}

function buscarPeliculaPorActor(parametro) {
    let actor;
    for (pelicula of arrayPeliculas){
        actor = pelicula.actores;
        for(let i = 0; i < actor.length; i++){
            if((actor[i].nombre).indexOf(parametro) !== -1){
                return pelicula.nombre;
            }
        }
    }
}