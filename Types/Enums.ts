(() => {


enum AudioLevel {
    min = 7 , //podriamos asignar el valor minimo de la siguiente forma
    medium, /*asignando el valor minimo, el valor de medium cambiaria a
             el siguiente valor con respecto al minimo*/
    max
}


// let currentAudio = AudioLevel.min

/**
 * otra forma de asignar valores seria de la siguiente manera
 */

let currentAudio: AudioLevel = 10

console.log( AudioLevel.min)
console.log(AudioLevel.medium)

console.log( currentAudio )
console.log( AudioLevel )




})()