"use strict";

function makeUser() {
    return {
        name: `John`,
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name);

function makeUser() {
    return {
        name: `John`,
        ref() {
            return this;
        }
    };
}

user = makeUser();

alert(user.ref().name);