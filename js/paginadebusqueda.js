function devolverPelicula(...parametro) {

    let peliculasencontradas = new Array();
    if (parametro.length === 0) {
        parametro = (document.getElementById(
            "nombrepeli").value).toLowerCase().trim();
    }

    if (parametro !== "") {
        for (let i = 0; i < arrayPeliculas.length; i++) {
            let Pelicula = arrayPeliculas[i];

            if ((Pelicula.nombre !== null)) {
                if (((((Pelicula.nombre).indexOf(parametro)) !== -1))) {
                    peliculasencontradas.push(Pelicula);
                }
            }
        }
        console.log(peliculasencontradas);
    }
}

function devolverPeliculaSimilar() {

    let peliculaSimilar = new Array();
    let parametro = (document.getElementById(
        "peliculaSimilar").value).toLowerCase().trim();

    if (parametro !== "") {
        for (let i = 0; i < arrayGenero.length; i++) {
            let peliculaSimilar = arrayGenero[i];
            if ((peliculaSimilar.puntuacion !== null) && (peliculaSimilar.nombre !== null)) {
                if (((((peliculaSimilar.descripcion).indexOf(parametro)) !== -1)) ||
                    ((((peliculaSimilar.nombre).indexOf(parametro)) !== -1))) {
                    peliculaSimilar.push(peliculaSimilar);
                }
            }
        }
        console.log(peliculaSimilar);
    }
}

function peliculaPorActor(...parametro) {

    let actoresencontrados = new Array();
    if (parametro.length === 0) {
        parametro = (document.getElementById(
            "nombreactor").value).toLowerCase().trim();
    }

    if (parametro !== "") {
        for (let i = 0; i < arrayActores.length; i++) {
            let Actor = arrayActores[i];

            if ((Actor.nombre !== null)) {
                if (((((Actor.nombre).indexOf(parametro)) !== -1))) {
                    actoresencontrados.push(Actor);
                }
            }
        }
        console.log(actoresencontrados);
    }
}