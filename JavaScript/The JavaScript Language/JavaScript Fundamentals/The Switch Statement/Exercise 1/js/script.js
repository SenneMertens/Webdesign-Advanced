"use strict";

let browser;

if (browser === `Edge`) {
    alert(`You've got the Edge!`);
} else if (browser === `Chrome` || browser === `Firefox` || browser === `Safari`|| browser === `Opera`) {
    alert(`Okay we support these browsers too.`)
} else {
    alert(`We hope this page looks okay!`);
}