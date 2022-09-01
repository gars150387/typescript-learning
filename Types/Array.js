"use strict";
(() => {
    // const numbers: (string | number)[] = [1,2,3,4,5,6,'7',8,9]
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(numbers);
    const villians = ['1', '2', '3'];
    numbers.push(1); //
    villians.forEach(v => console.log(v.toLocaleLowerCase()));
})();
