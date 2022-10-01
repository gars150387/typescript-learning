(() => {

    /**Never es una funcion que no tiene un punto de salida alcanzale y que normalmente es una funcion que termina con un error*/
const error = (message: string):never => {
    /**De esta forma, la funcion no tiene continuidad */
 throw new Error( message )
}

error("Help")



})()