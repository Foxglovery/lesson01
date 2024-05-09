"use strict";
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = year
//1st variation
// let year: HTMLElement | null 
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }
//2nd variation : uses assertions to tell TS the types. no type guard needed
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
