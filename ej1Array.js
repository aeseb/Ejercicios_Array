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

function mostrarVector(vector){
    
    for (let i = 0; i < (vector.length); i++){
        if (arrayBinario[i] / 1 == 0){
            arrayBinario[i] = 1;
        }
        else{
            arrayBinario[i] = 0;
            }
            console.log(vector[i]);    
    }  
    
    /*No consigo que funcione.

    let grilla = vector.length * vector[0].length;

    for(let i = 0; i < vector.length; i++){

        for(let j = 0; j < vector[i].length; j++){
            console.log(vector[i][j] + " ");
        }
            console.log(grilla, "\n");
        } 
        */
}

mostrarVector(arrayBinario);


    
            
    

    
