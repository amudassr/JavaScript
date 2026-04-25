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
// if Statements
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



// Else if Statement 
// Weight 
let weight = 40;
if (weight >= 40) {
    console.log("Your weight is 40 or above.")
}
else if (weight < 40) {
    console.log("Your weight is below 40.")
}


// Marks 
let assg_marks = 85;
if (assg_marks > 80) {
    console.log("Your Grade is A+");
}
else if (assg_marks >= 60) {
    console.log("Your Grade is A");
}
else if (assg_marks >= 33) {
    console.log("Your Grade is B")
}

else if (assg_marks < 33) {
    console.log("Your is Grade is F")
}



// Months 
let month = "April";
if (month === "Januaury") {
    console.log("Winter is here 🥶");
}

else if (month === "April") {
    console.log("Summer is here 🔥");
};



// Else Statement 
let issb = "recommend";
if (issb === "recommend") {
    console.log("you get selected");
}

else {
    console.log("you not get selected");
}


//  Login Check 
let username = "mudassir";
let password = "12345";
if (username === "mudassir" & password === "1234") {
    console.log("Login successful!");
}
else {
    console.log("Wrong username or password!");
}



// Colors Sign 
let colors = "blue";
if (colors === "red") {
    console.log("Danger · Alert · Stop ☠️")
}

else if (colors === "green") {
    console.log("Success · Go · Safe 🏆")
}

else if (colors === "yellow") {
    console.log("Caution · Happy · Warm 😊")
}

else if (colors === "black") {
    console.log("Power · Elegance · Death 💪🏻")
}

else {
    console.log("❌invalid colors");
}

// Popcorn Prices System  
let size = "s";
if (size === "xl") {
    console.log("price is Rs. 250");
}

else if (size === "l") {
    console.log("price is Rs. 200");
}

else if (size === "m") {
    console.log("price is Rs. 100");
}

else {
    console.log("small size is not avaiable")
}



//  Mobile Battery Status
let battery = 31;
if (battery === 100) {
    console.log("Fully charged!");
}

else if (battery >= 70) {
    console.log("Battery is good.");
}

else if (battery >= 50) {
    console.log("Battery Weak, please charge Soon")
}

else if (battery <= 30) {
    console.log("Battery low, please charge.");
}

else {
    console.log("Critical! Plug in now!");
}



// Game Score Rank 
let score = 2500;
if (score >= 10000) {
    console.log("Rank: Legend 🏆");
}

else if (score >= 8000) {
    console.log("Rank: Diamond 💎");
}

else if (score >= 5000) {
    console.log("Rank: Gold 🥇");
}

else if (score >= 3000) {
    console.log("Rank: Silver 🥈")
}

else {
    console.log("Rank: Beginner 🔰");
}



// Nested if else 
let obtained_marks = 82;
if (obtained_marks >= 33) {
    console.log("Pass");
    if (obtained_marks >= 80) {
        console.log("Grade: A+ 🏆");
    }

    else if (obtained_marks >= 70) {
        console.log("Grade: A 🥇");
    }

    else {
        console.log("keep work hard 🔰")
    }
}

else {
    console.log("Better luck next time!");
}



//  University Admission 

let uni_age = 20;
let uni_marks = 80;

if (uni_age >= 18) {
    console.log("you are eligible for admission");
    if (uni_marks >= 80) {
        console.log("Congrates! you get admission in Soft Eng")
    }

    else if (uni_marks >= 60) {
        console.log("Welcome! you get admission in Computer Eng")
    }

    else {
        console.log("But! your merit is low you are in waiting list")
    }
}

else {
    console.log("you are not eligible for admission");
}



// Online Shopping Discount 
let user = "member";
let bill = 8000;
if(user === "member") {
    console.log("Welcome! you are member of our store.");
    if(bill >= 15000) {
        console.log("congrates! you get 20% discount.");
    }

    else if(bill >= 8000) {
        console.log("congrates! you get 10% discount.");
    }

    else {
        console.log("please spend 8000 PKR and get 10% off.");
    }
}

else {
    console.log("Sign up here to become our member");
}
