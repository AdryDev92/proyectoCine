let arrayFilmsCopy = arrayFilms;                        // Se copia el arrayFilms a otro para evitar la modificacion del array principal
let showFilms;                                          // Variable que se usa para asignarle una función

let errorGenero = "El género introducido no existe";    // Muestra "El género introducido no existe".

//Funcion 1: Devuelve las 10 películas con más personas trabajando en ella.
function topFilms() {
  //Recibe el dato del input genero.
  let genero = collectData("#inputGeneroFuncion1");
  let inputGenero = $('#inputGeneroFuncion1');
  
  let arraygenero = [];   //Array para guardar las películas por género si se especifica.
  let h3 = $("#h3Funcion1");

  // Si el género es undefined mostrará todas las películas.
  if (!validateData(genero)) {

    // Envia a la función showFilms para que imprima el array
    createTable(arrayFilmsCopy.sort((x, y) => y.name.length - x.name.length).slice(0, 10), ["nombre", "género", "director", "actores", "año", "mes", "descripción", "duración", "puntuación"], false);

    // Si no, usará las películas del género.
  } else {

    if (ifExiste("género", genero)) {

      $("#inputGeneroFuncion1").addClass("inputCorrect");

      // Añade al arraygenero todas las películas con ese género.
      for (valueArrayFilms of arrayFilmsCopy) {
        for (value in valueArrayFilms) {
          if (value === "género") {

            // Comprueba si hay alguna película con el genero indicado
            if (valueArrayFilms[value] === genero) {

              // Añade la película al array específico.
              arraygenero[arraygenero.length] = valueArrayFilms;
            }
          }

        }
      }
      // Comprueba si el array esta vacío.
      if (arraygenero.length === 0) {
        alert("No existe ninguna película de este género.")
      } else {
        // Envía a la función showFilms para que imprima el array.
        createTable(arraygenero.sort((x, y) => y.genero.length - x.genero.length).slice(0, 10), ["nombre", "género", "director", "actores", "año", "mes", "descripción", "duración", "puntuación"], false);

        printError(inputGenero, "", "", h3, false);
      }
    } else {
      printError(inputGenero, errorGenero, "", h3, true);
    }
  }
}

// Función 2: Muestra la película con mayor puntuacion de todas o de un genero concreto, si hay varias películas con la máxima puntuación se mostrará por orden alfabético.
function bestFilm() {
  //Recibe el dato del input genero.
  let genero = collectData("#inputGeneroFuncion2");
  let inputGenero = $('#inputGeneroFuncion2');
  
  let arraygenero = [];   //Array para guardar las películas por género si se especifica.
  let h3 = $("#h3Funcion2");

  // Si el género es undefined mostrará todas las películas.
  if (genero === "" || genero === undefined || genero === null) {

    // Envía a la función showFilms para que imprima el array.
    createTable(arrayFilmsCopy.sort(sortRating).slice(0, 1), ["nombre", "género", "director", "actores", "año", "mes", "descripción", "duración", "puntuación"], false);

    // Si no, usará las películas del género.
  } else {

    if (ifExiste("género", genero)) {
      // Añade al arraygenero todas las películas con ese género.
      for (valueArrayFilms of arrayFilmsCopy) {
        for (value in valueArrayFilms) {
          if (value === "género") {

            // Comprueba si hay alguna película con el género introducido.
            if (valueArrayFilms[value] === genero) {

              //Añade la película al array específico.
              arraygenero[arraygenero.length] = valueArrayFilms;
            }
          }
        }
      }
      //Comprueba si el array está vacío.
      if (arraygenero.length === 0) {
        alert("No existe ninguna película de este género")
      } else {
        // Envía a la función showFilms para que imprima el array
        createTable(arraygenero.sort(sortRating).slice(0, 1), ["nombre", "género", "director", "actores", "año", "mes", "descripción", "duración", "puntuación"], false);

        printError(inputGenero, "", "", h3, false);
      }
    } else {
      printError(inputGenero, errorGenero, "", h3, true);
    }
  }
}

//Funcion 3: Debe ordenar las películas por puntuación o por fecha de emisión.
function sortFilm() {
  //Recibe el dato del input genero
  let genero = collectData("#inputGeneroFuncion3");
  let sorts = collectData("#selectNombrePuntuacionFuncion3");           // Coge el dato elegido en el select
    
  let arraygenero = [];                                                 // Array para guardar las películas por género si se especifica
  let h3 = $("#h3Funcion3");
  let inputGenero = $('#inputGeneroFuncion3');

  if (genero === "" || genero === undefined || genero === null) {
    if (sorts === "puntuación") {
      //Envia a la funcion showFilms para que imprima el array
      createTable(arrayFilmsCopy.sort(sortRating), ["nombre", "género", "director", "actores", "año", "mes", "descripción", "duración", "puntuación"], false);
    } else {
      //Envia a la funcion showFilms para que imprima el array
      createTable(arrayFilmsCopy.sort(sortName), ["nombre", "género", "director", "actores", "año", "mes", "descripción", "duración", "puntuación"], false);
    }
  } else {

    if (ifExiste("género", genero)) {
        
      for (valueArrayFilms of arrayFilmsCopy) {
        for (value in valueArrayFilms) {
          if (value === "género") {

            // Comprueba si hay alguna película con el género indicado.
            if (valueArrayFilms[value] === genero) {

              //Añade película al array específico.
              arraygenero[arraygenero.length] = valueArrayFilms;
            }
          }

        }
      }

      // Comprueba si el array esta vacío.
      if (arraygenero.length === 0) {
        alert("No existe ninguna película de este género.")
      } else {
        if (sorts === "puntuación") {
          // Envía a la función showFilms para que imprima el array.
          createTable(arraygenero.sort(sortRating), ["nombre", "género", "director", "actores", "año", "mes", "descripción", "duración", "puntuación"], false);

          printError(inputGenero, "", "", h3, false);
        } else {
          // Envía a la función showFilms para que imprima el array.
          createTable(arraygenero.sort(sortName), ["nombre", "género", "director", "actores", "año", "mes", "descripción", "duración", "puntuación"], false);

          printError(inputGenero, "", "", h3, false);
        }
      }
    } else {
        printError(inputGenero, errorGenero, "", h3, true);
    }
  }
}
