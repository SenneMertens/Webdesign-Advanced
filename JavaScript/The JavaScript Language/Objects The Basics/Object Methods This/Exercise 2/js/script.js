"use strict";

let calculator = {
    a: null,
    b: null,
    read() {
        this.a = +prompt(`Enter the first number:`, 0);
        this.b = +prompt(`Enter a second number:`, 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}