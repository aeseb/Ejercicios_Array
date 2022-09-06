/*
    EJ 1

    Cambiar los 1 a 0 y viceversa con el array proporcionado

    Mostrar el resultado del array, antes y despues de la alteracion, de forma horizontal

    ej: 

        Antes:   001010010
        Despues: 110101101
 */


let arrayBinario = [
    1, 0, 0, 1, 0, 1, 1, 1,
    1, 0, 0, 1, 0, 0, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 1,
    1, 0, 0, 1, 1, 1, 1, 0
]

/**
 * Funcion que intercambia 0s y 1s y viceversa
 * @param {Array} vector a modificar
 */
function modificarVector(vector) {
    for (let i = 0; i < (vector.length); i++) {
        if (arrayBinario[i] / 1 == 0) {
            arrayBinario[i] = 1;
        }
        else {
            arrayBinario[i] = 0;
        }
    }
}

/**
 * Muestro el array arrayBinario
 */
function mostrarVector(estado) {
    console.log(estado, arrayBinario.join(', '));
}

/**
 * Muestro en consola el array sin modificar y 
 * modificado.
 */
mostrarVector("Antes    ");
modificarVector(arrayBinario);
mostrarVector("Despues  ");







