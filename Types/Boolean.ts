(()=>{

let isSuperman = true //no dejar que typescript reconozca la variable, asignarle el type

console.log({isSuperman})

isSuperman = true &&  false
console.log({isSuperman})


})()