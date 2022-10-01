"use strict";
(() => {
    /**
     * Una function que no tenga la palabra return, estaria retornando un valor undefined.
     *
     * Para una funcion que no retorna nada, seria correcto asignar "void" para informarle a la function
     * que no estaria retornando algo.
     */
    // function callBatman() {
    // }
    // const a = callBatman() //de esta forma a estaria retornando undefined
    function callBatman() {
        return;
    }
    const a = callBatman(); //en este caso la function esta notificando que no estaria regresando algo
    /**
     * En funcion de flecha, se le estria asignando el tipo de variable de esta forma.
     */
    const callSuperman = () => {
        return;
    };
})();
