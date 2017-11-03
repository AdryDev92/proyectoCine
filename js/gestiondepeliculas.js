/**
 * Devuelve las 10 películas con más reparto.
 */
function topFilms() {
    let genero = arrayPeliculas.find
    (x => x.genero === document.getElementById("inputGenero1").value.toLocaleLowerCase().trim());

    let arrayGenero = [];
    if (genero === "" || genero === undefined || genero === null) {
        console.log(arrayPeliculas.sort(orderFilms()), 10);
    } else {
        for (let i = 0; i < arrayPeliculas.length; i++) {
            if (arrayPeliculas[i].genero.toLowerCase().trim() === genero) {
                arrayGenero[arrayGenero.length] = arrayPeliculas[i];
            }
        }
        console.log(arrayGenero.sort(orderFilms()), 10);
    }
}

/**
 * Devuelve la mejor película.
 * @param x
 * @param y
 */
function orderFilms(x, y) {
    x.films.length < y.films.length;
}

function bestFilm() {
    let genero = arrayPeliculas.find(x => x.genero === document.getElementById("inputGenero2").value.toLocaleLowerCase().trim());
    let arrayGenero = [];
    if (genero === "" || genero === undefined || genero === null) {
        console.log(arrayPeliculas.sort(orderScore()), 1);
    } else {
        for (let i = 0; i < arrayPeliculas.length; i++) {
            if (arrayPeliculas[i].genero.toLowerCase().trim() === genero) {
                arrayGenero[arrayGenero.length] = arrayPeliculas[i];
            }
        }
        console.log(arrayGenero.sort(orderScore()), 1);
    }
}

function orderScore(x, y) {
    x.puntuacion.length < y.puntuacion.length;
}

function sortFilm() {
    let genero = arrayPeliculas.find(x => x.genero === document.getElementById("inputGenero3").value.toLocaleLowerCase().trim());
    let order = arrayPeliculas.find(x => x.selectOrder === document.getElementById("selectOrder").value.toLocaleLowerCase().trim());
    let arrayGenero = [];

    if (genero === "" || genero === undefined || genero === null) {
        if (order === "puntuación") {
            console.log(arrayPeliculas.sort(orderScore()));
        } else {
            console.log(arrayPeliculas.sort());
        }
    } else {
        for (let i = 0; i < arrayPeliculas.length; i++) {
            if (arrayPeliculas[i].genero.toLowerCase().trim() === genero) {
                arrayGenero[arrayGenero.length] = arrayPeliculas[i];
            }
        }
        if (order === "puntuación") {
            console.log(arrayPeliculas.sort(orderScore()));
        } else {
            console.log(arrayGenero.sort());
        }
    }
}


