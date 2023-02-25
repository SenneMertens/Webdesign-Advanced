"use strict";

function pow(x, n) {
    let result;

    result = 0;

    for (let i = n; i > 0; i--) {
        result += x * n;
    }

    return result;
}