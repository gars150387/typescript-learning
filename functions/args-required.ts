(() =>{

/**la funcion tiene un numero de argumentos establecidos, al momento de llamr la funcion, typescript ha detectado que de los 2 solicitados, solo se ha recibido uno */
const fullName = (firstName:string, lastName:string):string => {
return firstName + '  ' + lastName
}

console.log(fullName('tony', 'Stark'))

})()