"use strict";

let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

alert(new A() == new B());