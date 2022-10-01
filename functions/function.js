"use strict";
(() => {
    let name = 'Juan';
    const sayHi = () => {
        return `Hola ${name}`;
    };
    // sayHi( name ) /**function no espare argunmento, sin emabrgo se adiciono el argunmento para mostrar el error */
    console.log(sayHi());
})();
