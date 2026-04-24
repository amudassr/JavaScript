// console.log() 
console.log("Hello World!");
console.log("welcome to my programming journey");
let a = 5;
let b = 8;
console.log("the sum is :", a + b);


// Template Literals 
let pencilPrice = 10;
let erassorPrice = 5;
// let result = "this is sum : " + (pencil + erassor) +  "Rupees";
let result = `the total sum is : ${pencilPrice + erassorPrice} Rupees.`;
console.log(result);


// Arthimatic Operators (+, -, *, /, %, **)
let x = 10;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);


// Unary Operators 
let m = 10;
console.log(m++);
console.log(++m);



// Assignment Operators 
let c = 10;
let d = 5;
c = d;
console.log(c);

let age = 21;
age += 1;
console.log(age);

age -= 2;
console.log(age);

age *= 2;
console.log(age);

age /= 2;
console.log(age);

age %= 2;
console.log(age);



// Comparison Operators

// Greater then 
let stdAge = 18;
console.log(stdAge > 18);

// Greater then or Equal to 
stdAge = 18;
console.log(stdAge >= 18);

// Less then 
stdAge = 18;
console.log(stdAge < 18);

// Less then or Equal to 
stdAge = 18;
console.log(stdAge <= 18);


// Equal to 
// compares value, not type
let num1 = 5;
let num2 = 5;
console.log(num1 == num2);

let num = 4;
let str = '4';
console.log(num == str)



// Not Equal to 
let dig1 = 6;
let dig2 = 6;
console.log(dig1 != dig2);

console.log(6 != str);


// compares type & values both

let number = 123;
let string = '123';
console.log(number === string);


// Compare with unicode of small & capital alphabet 

console.log('a' < 'b');

console.log('a' < 'A');

console.log('*' > '&');




// Conditional Statements
// Scholarship statement 
console.log('Before if statement');
let Cgpa = 3.1;
if (Cgpa >= 3.2) {
    console.log("✅ congratulations")
    console.log("You are eligible for a scholarship.");
}

if (Cgpa < 3.2) {
    console.log("❌Unfortunately, you are not eligible for a scholarship.")
}

console.log('After if statement');


// Name Condition 
let firstName = "Hamza";
if (firstName == "Hamza") {
    console.log(`Welcome ${firstName}`);
}


// Marks Condition 
let marks = 75;
if (marks >= 44) {
    console.log("✅ You passed the exam")
}


// Weather Condition 
let temp = 25;
if (temp >= 35) {
    console.log("🔥 It's hot outside")
}

if (temp <= 25) {
    console.log("🥶 Weather is cold")
}


// Traffic Light System 
let color = "red";
if (color === "red") {
    console.log("🛑 Stop!");
}

if (color === "yellow") {
    console.log("⚠️ Slow down");
}

if (color === "green") {
    console.log("✅ Go");
}



// Car Spped Check 
let speed = 71;
if (speed <= 70) {
    console.log("✅ Safe driving");
}
if (speed > 70) {
    console.log("❌ Over speed, slow down");
}

