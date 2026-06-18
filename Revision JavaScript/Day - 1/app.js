// Practise Qs : 1

let num = 10;
if (num % 10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}

// Practise Qs : 2 

// let userName = prompt("enter user name :");
// let userAge = prompt("enter user age");
// let userMssg = `${userName} is ${userAge} years old.`;
// alert(userMssg);


// Practise Qs : 3

let quarter = 2;

switch (quarter) {
    case (1):
        console.log("January, Febuary, March");
        break;
    case (2):
        console.log("April, May, June");
        break;
    case (3):
        console.log("July, August, September");
        break;
    case (4):
        console.log("October, November, December");
        break;
    default:
        console.log("invalid months");
}


// Practise Qs : 4

let golStr = "apples";

if ((golStr[0] === 'A' || golStr[0] === 'a') && golStr.length > 5) {
    console.log("golden string");
} else {
    console.log("not a golden string");
}


// Practise Qs : 5 - Largest Number

let a = 2;
let b = 4;
let c = 6;

if (a > b && a > c) {
    console.log(a);
} else if (b > c) {
    console.log(b);
} else {
    console.log(c);
}

// Smallest Number 

let i = 15;
let j = 10;
let k = 5;

if (i < j && i < k) {
    console.log(i);
} else if (j < k) {
    console.log(j);
} else {
    console.log(k);
}


// Practise Qs : 6 

let x = 32;
let y = 47852;

if (x % 10 === y % 10) {
    console.log("same last digit");
} else {
    console.log("not same");
}
