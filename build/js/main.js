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
    //need a type guard to fix the undefined c parameter and unrequired needs to be last
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const SumAll = (a = 10, b, c = 2) => {
    //need a type guard to fix the undefined c parameter and any undefined parameters need to be last
    return a + b + c;
};
logMsg(addAll(2, 3, 7));
logMsg(addAll(2, 3));
logMsg(SumAll(2, 3));
// if a is hard coded, must pass in undefined as placeholder for parameter HOWEVER c is fine because it is at the end
logMsg(SumAll(undefined, 3));
