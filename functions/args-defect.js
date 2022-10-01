"use strict";
(() => {
    /** TS no permite declarar un argumento requerido despues de un argumento opcional
     *
     * para que TS lo permite, el argumento requerido debe tener un valor definido
    */
    const fullName = (firstName, lastName, hero = false) => {
        if (hero) {
            return `${firstName} ${lastName || 'Que se yo!'}`.toUpperCase(); /**de esta forma, TS no arrojaria ningun error */
        }
        else {
            return `${firstName} ${lastName || 'Que se yo!'}`;
        }
    };
    console.log(fullName("tony", '', true)); //TS marca un error, sin embargo JS mlo ejecutara
})();
