// Practise Qs 1 

let num = 21;
if (num % 10 == 0) {
    console.log("Good");
} else {
    console.log("Bad");
}


// Practise Qs 2

// let userName = prompt("enter your username");
// let userAge = prompt("enter your age");
// let res = `${userName} is ${userAge} years old.`;
// console.log(res);



// Practise Qs 3 


let months = 4;
switch (months) {
    case 1:
        console.log("January, Febuary, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default: {
        console.log("Invalid months");
    }
}



// Practise Qs 4

let str = "Alihasan";
if ((str[0] == 'A' || str[0] == 'a') && (str.length > 5)) {
    console.log("Good String");
} else {
    console.log("Bad String");
}



// Practise Qs 5 

let a = 5;
let b = 10;
let c = 15;
if ((a > b) && (a > c)) {
    console.log(a);
} else if (b > c) {
    console.log(b);
} else {
    console.log(c);
}