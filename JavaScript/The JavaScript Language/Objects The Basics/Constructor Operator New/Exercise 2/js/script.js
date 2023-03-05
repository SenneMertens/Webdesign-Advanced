"use strict";

function Calculator() {
    this.a = null;
    this.b = null;

    this.read = function() {
        a = +prompt(`Enter a first number:`, 0);
        b = +prompt(`Enter a second number:`, 0);
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();

calculator.read();
alert(`Sum: ${calculator.sum()}`);
alert(`Multiplication: ${calculator.mul()}`);