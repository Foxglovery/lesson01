"use strict";
// // Type Aliases for basic types and functions
// type stringOrNumber = string | number
// interface TransactionObj {
//     readonly [index: string]: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
//Dynamically
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test)
// keyof creates a union type 
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//another way to do it.
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (studet, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'classes');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
