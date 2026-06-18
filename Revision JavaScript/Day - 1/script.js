// console.log( )

console.log("Hello World from JavaScript!");
let a = 5;
let b = 8;
console.log("sum is :", a + b);


// Template Literals 

let pencilPrice = 10;
let erasorPrice = 12;
// let output = "The total price is : "  + (pencilPrice + erasorPrice) + " Rupees. ";
let output = `The total price is : ${pencilPrice + erasorPrice} Rupees.`;
console.log(output);


//  Report Card

let student = "Muhammad";
let subject = "JavaScript Fundamentals";
let obtainedMarks = 91;
let totalMarks = 100;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade = percentage >= 90 ? "A+" : percentage >= 80 ? "A" : percentage >= 70 ? "B" : "C";

let result = `
=========================
      REPORT CARD
=========================
Student : ${student}
Subject : ${subject}
Marks : ${obtainedMarks} / ${totalMarks}
Percentage : ${percentage}%
Grade : ${grade}
=========================
`;
console.log(result);



//   Result Card 

let studentName = "Muhammad";
let studentSubject = "Basic JavaScript";
let obtainMarks = 91;
let totallMarks = 100;
let percentages = (obtainMarks / totallMarks) * 100;
let grades = percentages >= 90 ? "A+" : percentages >= 80 ? "A" : percentages >= 70 ? "B" : "c";

let resultCard = `
=====================
     RESULT CARD
=====================
Student : ${studentName}
Subject : ${studentSubject}
Marks : ${obtainMarks} / ${totalMarks}
Percetage : ${percentages}%
Grade : ${grades}
=====================
`;
console.log(resultCard);


// Arthimatic Operator 

let alpha = 10;
let beta = 5;

console.log(alpha + beta);
console.log(alpha - beta);
console.log(alpha * beta);
console.log(alpha / beta);
console.log(alpha % beta);
console.log(alpha ** beta);


// Unary Operator 

let ai = 5;
let bi = 10;
console.log(ai++); // 6
console.log(++ai);


// Assignment Operator 
let i = 5;
let j = 10;

i = j;
console.log(j);


// Comparison Operator 

// greater then (>)
let age = 18;
console.log(age > 18);

// greater then or equal to (>=)
let marks = 70;
console.log(marks >= 70);

// less then (<)
let gpa = 3.6;
console.log(gpa < 3);

// less then or equal to (<=)
let cgpa = 4.1;
console.log(cgpa <= 4.1);

// equal to (==)
let profit = 500;
console.log(profit == 500);

// not equal to (!=)
let loss = 200;
console.log(loss != 100);


// equal equal to
let n = 5;
let strr = "number";
console.log(n === strr);


// Conditional Statement

// if statement 

console.log("Before my if statement");

let myAge = 21;
if (myAge >= 18) {
      console.log("you are eligible");
      console.log("so you can drive");
}

if (myAge < 18) {
      console.log("you aren't eligible & you can't drive");
}

if (myAge > 20) {
      console.log("you are in your 20s.");
}

console.log("After my if statement");


// First Name Task
let firstName = "Muhammad";

if (firstName == "Muhammad") {
      console.log(`Welcome ${firstName}!`);
}


// Traffic Light System 
let color = "pink";

if (color == "red") {
      console.log("Stop / Danger 🔴");
}
if (color == "yellow") {
      console.log("Caution / Prepare to Stop 🟡");
}
if (color == "green") {
      console.log("Go / Clear 🟢");
} else {
      console.log("invalid colors ❌");
}


// Else Statement 

let stdAge = 31;
if (stdAge < 18) {
      console.log("you can't vote you are under 18");
}
else if (stdAge >= 18) {
      console.log("you can vote you are above 18")
}
else if (stdAge > 50) {
      console.log("you can vote from home bcz you are senior citizen");
}


// Student Grade System 
let stdMarks = 43;

if (stdMarks >= 80) {
      console.log("A+");
} else if (stdMarks >= 70) {
      console.log("A");
} else if (stdMarks >= 60) {
      console.log("B");
} else if (stdMarks >= 50) {
      console.log("C");
} else if (stdMarks < 40) {
      console.log("Fail");
} else {
      console.log("Invalid marks ❌");
}


// Season System 

let season = "march";

if (season === "december") {
      console.log("winter is here 🥶");
} else if (season === "june") {
      console.log("summer is here 🌞");
} else if (season === "october") {
      console.log("autumn is here 🍂")
} else if (season === "march") {
      console.log("spring is here 🌼");
} else {
      console.log("Invalid season ❌");
}


// Popcorn price system 
let size = "M";

if (size === "XL") {
      console.log("XL price is Rs. 250");
} else if (size === "L") {
      console.log("Large price is Rs. 200");
} else if (size === "M") {
      console.log("Medium price is Rs. 100");
} else if (sixe === "L") {
      console.log("Small price is Rs. 50");
} else {
      console.log("Invalid size");
}

console.log("Nested if-else");

// Nested if-else 
let stdMark = 90;

if (stdMark >= 33) {
      console.log("Pass")
      if (stdMark >= 80) {
            console.log("Grade: A+");
      } else {
            console.log("Grade: B");
      }
} else {
      console.log("Fail");
}


// Logical Operators 

// AND Operator &&
let numbers = 85;

if (numbers >= 33 && numbers >= 80) {
      console.log("Promoted");
      console.log("Good");
}

// OR Operator ||
if (numbers >= 33 || numbers >= 80) {
      console.log("Promoted");
      console.log("Destinct");
}

// NOT Operator !
if ((numbers > 33 && numbers <= 80) || !(false)) {
      console.log("Congates Pass!");
} else {
      console.log("Fail! Better luck next time");
}


// Practise Qs : 1

let goodStr = "apple";
if (goodStr[0] === 'a' && goodStr.length > 3) {
      console.log("good string");
} else {
      console.log("not good string");
}

// Practise Qs : 2 

let num = 12;
if ((num % 3 === 0) && (num + 1 == 15) || (num - 1 == 11)) {
      console.log("Safe");
} else {
      console.log("Unsafe");
}


// truthy & falsy value 

if(-0) {
      console.log("it has true value");
} else {
      console.log("it has false value");
}