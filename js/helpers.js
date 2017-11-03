/*
Valida que el elemento que se pasa por parametro
no pueda ser undefined, null o cadena vacia.
 */
function validaciones(x) {
    if (x === null ||
        x === undefined ||
        x.length === 0)
    {
        return false;
    } else{
        return true;
    }

}

/*
Comprueba si el elemento existe en el array.
Si no existe, lo añade, en caso contrario
lo actualiza.
 */
function checkArray(array, elemento){
    let index = array.indexOf(elemento);
    if( index == -1 ){
        array.push(elemento);
    }else{
        array[index] = elemento;
    }
}