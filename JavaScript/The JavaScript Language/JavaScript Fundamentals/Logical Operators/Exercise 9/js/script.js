"use strict";

let username, password;

username = prompt(`Enter your username:`, ``);

if (username == `Admin`) {
    password = prompt(`Enter your password:`, ``);

    if (password == `TheMaster`) {
        alert(`Welcome!`);
    } else if (password == `` || password == null) {
        alert(`Canceled.`);
    } else {
        alert(`Wrong password.`);
    }
} else if (username == `` || username == null) {
    alert(`Canceled.`);
} else {
    alert(`I don't know you.`);
}