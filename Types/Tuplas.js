"use strict";
(() => {
    /*
    las duplas son son determinadas
    asignando el valor de cada elemento
     dentro del array
    */
    // const hero = ['Dr. Strange', 100] //este es un simple array
    const hero = ['Dr. Strange', 100]; //asi se crea una dupla
    /**
     * [index[0]: string , index[1]: number]
     */
    hero[0] = "Batman";
    hero[1] = 500;
    /*
    se muestra el error al tratar de asignar un boolean en el index 0
    
    */
    const example = [true, 'Dr. Strange', 100];
})();
