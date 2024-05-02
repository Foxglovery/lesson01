"use strict";
// Literal Types
let myName;
//can only be assigned once, like a constant
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
//functions that don't have a return
//functions without return should be void type; void declaration can be omitted
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
logMsg(add(4, 3));
// non arrow function
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//  optional parameters
const addAll = (a, b, c) => {
    return a + b + c;
};
