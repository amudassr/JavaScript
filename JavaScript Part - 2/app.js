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
if (user === "member") {
    console.log("Welcome! you are member of our store.");
    if (bill >= 15000) {
        console.log("congrates! you get 20% discount.");
    }

    else if (bill >= 8000) {
        console.log("congrates! you get 10% discount.");
    }

    else {
        console.log("please spend 8000 PKR and get 10% off.");
    }
}

else {
    console.log("Sign up here to become our member");
}



// Flight Boarding System 

let ticket = "valid";
let luggageWeight = 9;
if (ticket === "valid") {
    console.log("Welcome! Your ticket is valid.");
    if (luggageWeight < 20) {
        console.log(`Boarding pass issued. Have a safe flight!`);
    }

    else if (luggageWeight >= 20) {
        console.log(`Extra luggage charges: Rs. 500 per kg.`);
    }
}

else {
    console.log("Entry denied! Ticket is not valid.");
}



//  Gym Membership 

let gymAge = 17;
let gymPlan = "premium";

if (gymAge >= 16) {
    console.log("Get Fit with us! Started Today");
    if (gymPlan === "basic") {
        console.log("Access granted: Cardio area only.");
    }

    else if (gymPlan === "premium") {
        console.log("Access granted: Cardio + Weights area.");
    }

    else if (gymPlan === "vip") {
        console.log("Access granted: Full gym + Personal trainer!");
    }

    else {
        console.log("Access denied: please must before exercise buy a plan")
    }
}

else {
    console.log("Sorry! Adults only. Age must be 16+")
}



// Pizza Order System 

let restaurantStatus = "open";
let distance = 11;

if (restaurantStatus === "open") {
    console.log("Your table is booked. Welcome!");
    if (distance >= 10) {
        console.log("Order confirmed! Delivery charge: Rs. 100");
    }

    else if (distance < 10) {
        console.log("Sorry! Delivery not available in your area.");
    }
}

else {
    console.log("Sorry! We are closed. Please visit tomorrow.");
}



// Logical Operators 
// AND && Operator 

let mathMarks = 84;
if (mathMarks >= 33 && mathMarks >= 80) {
    console.log("Pass");
    console.log("A+");
}
else {
    console.log("Fail");
}



// OR || Operator 

let engMarks = 33;
if (engMarks >= 33 || engMarks >= 80) {
    console.log("Promoted");
    console.log("A1")
}
else {
    console.log("Fail");
}


// NOT ! Operator 

let sciMarks = 36;
if (!(sciMarks < 33)) {
    console.log("Pass");
}

else {
    console.log("Fail");
}


// Combine Operators 

let combineMarks = 20;
if ((combineMarks > 33 && combineMarks <= 80) || !false) {
    console.log("Finally Pass!");
}



// Practise Qs For Operators 

let gstr = "apple";
if (gstr[0] === "a" && gstr.length > 3) {
    console.log("good gtring");
}

else {
    console.log("not good string");
}



let num_digit = 12;
if (num_digit % 3 == 0 && num_digit + 1 == 15 || num_digit - 1 == 11) {
    console.log("Safe");
}

else {
    console.log("Unsafe");
}



// Bank Loan System

let userAge = 24;
let userSalary = 50000;
let creditScore = 600;

if (userAge >= 21 && userSalary >= 30000 && creditScore >= 700) {
    console.log("Loan Approved! ✅");
}

else if (userAge >= 21 && userSalary >= 50000) {
    console.log("Loan conditionally approved. Credit score low ⚠️")
}

else {
    console.log("Loan Rejected!!!");
}



//  Game Character Status

let health = 32;
let shield = 1;
let lives = 5;

if (health >= 50 && shield > 0 && lives > 0) {
    console.log("Character is Safe 🛡️");
}

else if (health <= 20 && shield < 1) {
    console.log("Danger! Low health or no shield ⚠️");
}

else if (health > 20 && health < 50 && shield > 0) {
    console.log("Character is Recovering... ⚡");
}

else {
    console.log("Game Over 💀");
}



//  Driving License System 

let drivingAge = "19";
let eyesight = 72;
let testPassed = "Pass";
let crimninalRecord = "Criminal record";

if (crimninalRecord !== "No record" || drivingAge < 18) {
    console.log("License Rejected ❌");
}

else if (drivingAge > 18 && testPassed === "Pass" && eyesight >= 70) {
    console.log("License Approved ✅");
}

else if (drivingAge > 18 && testPassed === "Fail" || eyesight < 70) {
    console.log("License Re-apply ⚠️");
}

else {
    console.log("Invalid Application");
}



// Hospital Emergency System

let patientAge = 17;
let patientHeartRate = 129;
let patientBloodPressure = 179;
let patientAccident = "No";

if (patientAge >= 60 && patientHeartRate >= 120) {
    console.log("Shifted in ICU 🚨");
}

else if (patientAccident === "Yes" || patientBloodPressure > 180) {
    console.log("Shifted in Emergency Room 🏃");
}

else if (patientAge < 18) {
    console.log("Shifted in Children Ward 👶");
}

else {
    console.log("Shifted in General Ward 🏥");
}




// K Electric Bill System 

let unitUsed = 190;
let billAmount = 3000;
let monthsUnpaid = 2;

if (monthsUnpaid >= 2 && billAmount >= 5000) {
    console.log("Connection Cut ✂️");
}

else if (unitUsed > 400 || billAmount > 2500) {
    console.log("Heavy Bill Warning ⚠️");
}

else if (unitUsed < 200) {
    console.log("Normal Usage ✅");
}

else {
    console.log("Standard Bill 🧾");
}



// School Result System

let schoolMarks = 80;
let schoolAttendence = 76;
let examCheating = "No";

if (examCheating === "Yes") {
    console.log("Exam Cancelled 🚫");
}

else if (schoolMarks > 80 && schoolAttendence > 75) {
    console.log("Distinction 🏆");
}

else if (schoolMarks > 50 && schoolAttendence > 60) {
    console.log("Pass ✅");
}

else {
    console.log("Fail ❌");
}



// truthy & falsy values

if (undefined) {
    console.log("it has true value");
}

else {
    console.log("it has false value");
}


// Falsy values 
// false, 0, -0, 0n(BigInt value), ""(Empty String), null, undefined, NaN

// Truthy values
// Everthing else like (1, 2 ,3 ... , -1, -2, -3 .. , any string, spacing string) 

let newstring = " ";
if (newstring) {
    console.log("string in not empty");
}

else {
    console.log("string is empty");
}



// Switch Statement 

let switchColor = "yellow";

switch (switchColor) {
    case "red":
        console.log("stop!");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default: {
        console.log("Broken Light");
    }

}



// Switch Statement Practise 

// Day Series
let day = "5";
switch (day) {
    case "1":
        console.log("Today is Saturday");
        break;
    case "2":
        console.log("Today is Sunday");
        break;
    case "3":
        console.log("Today is Monday");
        break;
    case "4":
        console.log("Today is Tuesday");
        break;
    case "5":
        console.log("Today is Wednesday");
        break;
    case "6":
        console.log("Today is Thursday");
        break;
    case "7":
        console.log("Today is Friday");
        break;
    default: {
        console.log("Invalid day");
    }
}


// Month Series 
let switchMonth = "4month";
switch (switchMonth) {
    case "1month":
        console.log("1st is January");
        break;
    case "2month":
        console.log("2nd is Febuary");
        break;
    case "3month":
        console.log("3rd is March");
        break;
    case "4month":
        console.log("4th is April");
        break;
    case "5month":
        console.log("5th is May");
        break;
    case "6month":
        console.log("6th is June");
        break;
    case "7month":
        console.log("7th is July");
        break;
    case "8month":
        console.log("8th is August");
        break;
    case "9month":
        console.log("9th is September");
        break;
    case "10month":
        console.log("10th is October");
        break;
    case "11month":
        console.log("11th is NOvember");
        break;
    case "12month":
        console.log("12th is December");
        break;
    default: {
        console.log("Invalid Month");
    }
}



// Grade Series 
let switchGrade = "B";
switch (switchGrade) {
    case "A":
        console.log("Excellent! 🏆");
        break;
    case "B":
        console.log("Good Job! ✅");
        break;
    case "C":
        console.log("Average ⚠️");
        break;
    case "D":
        console.log("Below Average 📉");
        break;
    case "E":
        console.log("Fail ❌");
        break;
    default: {
        console.log("Invalid Grade");
    }
}



// Season Series 
let switchSeason = "winter";
switch (switchSeason) {
    case "summer":
        console.log("Summer ☀️");
        break;
    case "winter":
        console.log("Winter ❄️");
        break;
    case "spring":
        console.log("Spring 🌸");
        break;
    case "autumn":
        console.log("Autumn 🍂");
        break;
    default: {
        console.log("Invalid Season");
    }
}


// PaymentMethod Series  
let switchpayment = "easypaisa";
switch (switchpayment) {
    case "cash":
        console.log("Pay at counter 💵");
        break;

    case "card":
        console.log("wipe your card 💳");
        break;

    case "easypaisa":
    case "jazzcash":
        console.log("Enter your number 📱");
        break;

    default: {
        console.log("Invalid Payment Method");
    }
}



// Alerts & Prompts 

// alert 
// alert("Something is wrong!");

// console log 
console.log("Good Morning, Have a nice day!");

// console error 
console.error("this is an error message");

// console warning 
console.warn("this is warning message");


// Prompts

// let fName = prompt("enter first name :");
// let lName = prompt("enter last name");
// let msg = `Welcome ${fName}  ${lName} !`; 
// alert(msg);


//  Pizza Order System

// let customerName = prompt("Enter your name :") ;
// let pizzaSize = prompt("Your pizza size (Small,Medium)");
// let orderConfirm = `${customerName} your ${pizzaSize} pizza order confirm`;
// alert(orderConfirm);


// Bank Greeting System

// let bankUserName = prompt("Enter your name");
// let bankUserCity = prompt("Enter your city");
// let bankUserLogin = `Welcome ${bankUserName} you login in your ${bankUserCity} branch`;
// alert(bankUserLogin);


// Student Result System 

// let studentName = prompt("Enter student name");
// let studentMarks = prompt("Enter student marks");
// let studentResult = `${studentName} you got ${studentMarks}%`;
// alert(studentResult);



//  Flight Booking System

let passengerName = prompt("Enter passenger name");
let passengerDest = prompt("Enter destination city");
let passengerFlight = `${passengerName} your flight ✈️ has book for ${passengerDest}`;
alert(passengerFlight);