// Practise Qs: 1 

let num = 15;
if (num % 10 === 0) {
    console.log("Good");
}
else if (num % 10 !== 0) {
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

let string = "Alihasan";
if((string[0] === "a" || string[0] === "A") && (string.length > 5)) {
    console.log("Golden String");
}

else {
    console.log("Not a Golden String");
}




// Practise Qs: 5

let number1 = 10;
let number2 = 20;
let number3 = 25;

if(number1 > number2 && number1 >number3) {
    console.log("largest:" + number1);
}

else if(number2 > number1 && number2 > number3) {
    console.log("Largest: " + number2);
}

else {
    console.log("Largest: " + number3);
}


// Practise Qs: 6

let num1 = 24040;
let num2 = 37470;

if(num1 % 10 === num2 % 10 ) {
    console.log("Same last digit! ✅");
}

else {
    console.log("Different last digit ❌");
}

