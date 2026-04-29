// Practise Qs: 1 

let num = 105;
if (num % 10 === 0) {
    console.log("Good");
} else {
    console.log("Bad");
}



// Practise Qs: 2

// let userName = prompt("Enter your name");
// let userAge = prompt("Enter your age");
// let userIntro = `${userName} is ${userAge} years old.`;
// alert(userIntro);


// Practise Qs: 3

let months = "quarter3";
switch (months) {
    case "quarter1":
        console.log("January, February, March");
        break;
    case "quarter2":
        console.log("April, May, June");
        break;
    case "quarter3":
        console.log("July, August, September");
        break;
    case "quarter4":
        console.log("October, November, December");
        break;
    default: {
        console.log("Wrong Months");
    }
}



// Practise Qs: 4

let string = "Aliaaaa";

if((string[0] === "a") || (string[0] === "A") && (string.length > 5)) {
    console.log("Golden String");
}

else {
    console.log("Not Golden String");
}





// Practise Qs: 5

let number1 = 30;
let number2 = 20;
let number3 = 10;

if(number1 < number2 && number2 < number3) {
    console.log("Smallest:" + number1);
}

else if(number2 < number1 && number2 < number3) {
    console.log("Smallest:" +number2);
}

else {
    console.log("Smallest:" + number3);
}


// Practise Qs: 6

let num1 = 24040;
let num2 = 37470;

if (num1 % 10 === num2 % 10) {
    console.log("Same last digit! ");
}

else {
    console.log("Different last digit ❌");
}


// More Practise Question 

// Task 1 — Odd or Even

let pnum = 11;
if(pnum % 2 === 0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}


// Task 2 — Positive, Negative or Zero

let newnum = -4;
if(newnum > 0) {
    console.log("Positive Number");
}
else if(newnum < 0) {
    console.log("Negative Number");
} else {
    console.log("It's Zero!");
}



// Task 3 — Leap Year Checker

let year = 2025;
if(year % 4 === 0) {
    console.log("Leap Year");
}
else {
    console.log("Not a Leap Year");
}



// Task 4 — Temperature Checker

let temp = 31;
if(temp < 0) {
    console.log("Freezing ❄️");
}

else if(temp >= 0 && temp <= 15 ) {
    console.log("Cold 🧥");
}

else if(temp >= 16 && temp <= 30 ){
    console.log("Normal 🌤️");
}

else {
    console.log("Hot 🔥");
}



// Task 5 — Shopping Discount 

let bill = 2000;
if(bill < 5000) {
    console.log("No Discount Untill Shopping Rs.5000");
}

else if(bill >= 5000 && bill <= 10000) {
    console.log("10% Discount 🎉");
}

else {
    console.log("20% Discount 🎊");
}



// Task 6 — Password Checker

let password = prompt("Enter your passowrd");
if(password.length < 8) {
    console.log("Too Short ❌");
}

else if(password.length >= 8 && password.length  <= 12) {
    console.log("Good Password ✅");
}

else {
    console.log("Strong Password 💪");
}