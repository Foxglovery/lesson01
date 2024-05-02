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
// notice the play with default values
const SumAll = (a = 10, b, c = 2) => {
    //need a type guard to fix the undefined c parameter and any undefined parameters need to be last
    return a + b + c;
};
logMsg(addAll(2, 3, 7));
logMsg(addAll(2, 3));
logMsg(SumAll(2, 3));
// if a has default value, must pass in undefined as placeholder for parameter HOWEVER c is fine because it is at the end
logMsg(SumAll(undefined, 3));
// Rest parameters
// parameters passed in are not an array but using the rest operator forms an array which can be manipulated using reduce.
// The rest operator goes last in the parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3, 4));
// THE NEVER TYPE
// type meant for returning errors or loop containing 
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('this should never happen');
};
