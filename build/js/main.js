"use strict";
// // Type Aliases for basic types and functions
// type stringOrNumber = string | number
// convert to more or less specific type
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// angle brackets cant be used in React!!!!!!!!!!!!!!!
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// use assertion to tell ts we want to return that type
let myVal = addOrConcat(2, 2, 'concat');
// Be careful, TS will allow this but a string is returned.
let nextVal = addOrConcat(2, 2, 'concat');
//Double casting or force casting. It overules TS.
// 10 as string
10;
// The DOM
const img = document.getElementById('#img');
// using a Bang or non-null assertion will force it
const myImg = document.querySelector('img');
const angleBracketImg = document.querySelector('img');
img.src;
myImg.src;
