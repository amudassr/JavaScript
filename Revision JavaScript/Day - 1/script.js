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

