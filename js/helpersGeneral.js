function printError(selectorInput, textError, textCorrect, selectorText,
                    condition) {
    $(selectorInput).removeClass("inputError");
    $(selectorInput).removeClass("inputCorrect");

    $(selectorText).removeClass("mensajeCorrect");
    $(selectorText).removeClass("mensajeError");

    if (condition) {
        $(selectorInput).addClass("inputError");
        $(selectorText).text(textError);
        $(selectorText).addClass("mensajeError");
    } else {
        $(selectorInput).addClass("inputCorrect");
        $(selectorText).text(textCorrect);
    }
}

function createTable(arrayDates, arrayTitles, selectorTable, isString) {
    let array = [];

    for (let i = 0; i < arrayTitles.length; i++) {
        switch (arrayTitles[i]) {
            case "nombre":
                array[array.length] = "Nombre";
                break;
            case "genero":
                array[array.length] = "Genero";
                break;
            case "director":
                array[array.length] = "Director";
                break;
            case "actores":
                array[array.length] = "Actores";
                break;
            case "anio":
                array[array.length] = "Año";
                break;
            case "mes":
                array[array.length] = "Mes";
                break;
            case "descripcion":
                array[array.length] = "Descripción";
                break;
            case "duracion":
                array[array.length] = "Duración";
                break;
            case "puntuacion":
                array[array.length] = "Puntuación";
                break;
        }
    }
    createTitleTable(array, selectorTable);

    while ($(selectorTable).children().length > 1) {
        $(selectorTable).children().eq(1).remove();
    }

    for (i = 0; i < arrayDates.length; i++) {
        createRowTable(arrayDates[i], selectorTable, arrayTitles, isString)
    }
}

function createTitleTable(arrayTitles, selectorTable) {
    if ($("table tr th").length === 0) {
        let table = $(selectorTable);
        let tr = $("<tr></tr>");
        $(table).append(tr);
        for (let i = 0; i < arrayTitles.length; i++) {
            $(tr).append(`<th>${arrayTitles[i]}</th>`);
        }
    }
}

function createRowTable(pelicula, selectorTable, arrayTitles, isString) {
    let table = $(selectorTable);
    let tr = $("<tr></tr>");
    $(table).append(tr);
    let cadena = "";
    for (let i = 0; i < arrayTitles.length; i++) {
        for (atribute in pelicula) {
            if (arrayTitles[i] === atribute) {

                if (arrayTitles[i] !== "actores" && arrayTitles[i] !== "director") {

                    $(tr).append(`<td>${pelicula[atribute]}</td>`)

                } else if (arrayTitles[i] === "actores") {

                    for (let j = 0; j < pelicula.actores.length; j++) {
                        cadena += pelicula.actores[j].nombre + ",";
                    }
                    $(tr).append(`<td>${cadena}</td>`)

                } else if (arrayTitles[i] === "diretor" && isString === true) {
                    cadena = "";
                    for (let j = 0; j < pelicula.director.length; j++) {
                        cadena += pelicula.director[j].name + ",";
                    }
                    $(tr).append(`<td>${cadena}</td>`)
                } else if (arrayTitles[i] === "director" && isString === false) {
                    $(tr).append(`<td>${pelicula.director.length}</td>`)
                }
            }
        }
    }

}

function arrayMerge(arrayOne, arrayTwo) {
    let arrayResult = arrayOne.concat(arrayTwo);

    return arrayResult.filter(function (item, pos) {
        return arrayResult.indexOf(item) === pos
    });
}

function cleanError(h5, inputName) {
    if (h5.attr("id") !== undefined) {
        inputName.removeClass("inputError");
        inputName.removeClass("inputCorrect");
        h5.text("");
        let inputs = $('input');

    }
}

function cleanErrors(){
    let h5 = $("h5");
    let table = $("table");
    let inputName = $('input');
    cleanError(h5, inputName);
    cleanError(h5, h5);
    cleanError(table, inputName);
}