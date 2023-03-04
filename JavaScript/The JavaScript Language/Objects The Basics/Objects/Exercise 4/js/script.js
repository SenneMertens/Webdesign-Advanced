"use strict";

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof(obj[prop]) == `number`) {
            prop *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: `My menu`
}