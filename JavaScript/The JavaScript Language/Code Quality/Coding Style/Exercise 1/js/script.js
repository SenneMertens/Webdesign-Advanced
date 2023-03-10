"use strict";

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt(`X?`, ``);
let n = prompt(`N?`, ``);

if (n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero.`);
} else {
    alert(pow(x, n));
}