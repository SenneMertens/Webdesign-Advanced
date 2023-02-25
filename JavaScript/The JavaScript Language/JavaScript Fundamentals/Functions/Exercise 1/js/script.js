"use strict";

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm(`Did you parents allow you?`);
}