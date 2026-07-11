// function in js 

function hello() {
    console.log("hello world");
}
hello();

// Practise Qs 

function poem() {
    console.log("twinkle twinkle, little star");
}
poem();

// Practise Qs 

function dice() {
    let rand = Math.floor(Math.random() * 6 + 1);
    console.log(rand);
}

dice();


// functions with arguments / parameter

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Muhammad", 22);
printInfo("Abdullah", 21);


// Practise Qs 

function data(name, age, role, comapny) {
    console.log(`This is ${name} ${age} years working as a ${role} at ${comapny} here.`);
};

data("Muhammad", 21, "Software Engineer", "DEVSINC");


// Practise Qs 

function calAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

calAvg(2, 7, 6);

console.log("Print Table with function");

// Practise Qs || Print Table 

function printTable(n) {
    for (let i = n; i <= n * 10; i = i + n) {
        console.log(i);
    }
}

printTable(5);


// function with objects 

function studentInfo(name, course, duration, marks) {
    let studentData = {
        name: name,
        course: course,
        duration: duration,
        marks: marks
    };
    console.log(studentData);
};

studentInfo("Umair", "Web Design", "1 Month", 83);
studentInfo("Sara", "Digital Marketing", "3 Weeks", 79);


// return 

function sum(a, b) {
    return (a + b);
}

// let s = sum(8, 2);
// console.log(s);

console.log(sum(9, 7));


console.log("Scopes in JS");

// Scope in JS 

// Global scope 

let summ = 54;  // Global scope

// Function scope 

function calSum(a, b) {
    // let summ = a + b;  // Function scope
    console.log(summ);
}

calSum(1, 2);
console.log(summ);


// block scope

{
    let a = 25;
    console.log(a);
}

// for loop 

for (let x = 0; x <= 5; x++) {
    console.log(x);
}

// console.log(x);

// if statement 

let age = 19;

if (age > 18) {
    let str = "adult";
    console.log(str);
}


// Lexical scope 
console.log("Lexical scope");

function outerFun() {
    let x = 5;
    let y = 6;
    function innerFun() {  // function scope
        console.log(x);
        console.log(y);
    }
    innerFun();
}


// Practise Qs 

let greet = "Hello";  // global scope

function outerGreet() {
    let greet = "Good Morning!";  //  function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet);  // lexical scope
    }
    innerGreet();
}

console.log(greet);
outerGreet();


// Q1: Global vs Function Scope 

let city = "karachi";

function showCity() {
    let city = "lahore";
    console.log(city);
}

console.log(city);


// Q2: Nested Function + Lexical Scope

function bankAccount() {
    let balance = 5000;

    function checkBalance() {
        console.log(balance);
    }
    checkBalance();
}
bankAccount();


// Q3: Same Name, 3 Levels Deep

function level1() {
    let mssg1 = "hi";  // function scope
    console.log(mssg1);

    function level2() {
        let mssg2 = "hello";  // lexical scope
        console.log(mssg2);

        function level3() {
            let mssg3 = "good day";  // lexical scope 
            console.log(mssg3);
        }
        level3();

    } level2()

} level1();


// Q4: Shadowing Predict Karo 

let g = 10;

function test() {
    // console.log(g);

    let g = 20;
    console.log(g);
}
test();


// Q5: Real-world Scenario

function createCounter() {
    let count = 0;
    function increament() {
        count += 1;
        console.log(count);
    }
    increament();
    increament();
    increament();
}
createCounter();


// Function Expressions 
console.log("Function Expressions");

let numSum = function (a, b) {
    return a + b;
}

console.log(numSum(1, 3));

let mssg = function () {
    console.log("Have a Good Day");
}

mssg();

mssg = function () {
    console.log("Hello World");
}
mssg();


console.log("High Order Function");

// High Order Function 

function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}


let greeting = function () {
    console.log("Good Day");
}

multipleGreet(greeting, 4);


// Practise Qs 1 

function sayHiTwice(msg) {
    msg();
    msg();
}

let sayHi = function () {
    console.log("Hi");
}

sayHiTwice(sayHi);


// Practise Qs 2 


function runFunction(run) {
    run();
}

let runfun = function () {
    console.log("run function");
}

runFunction(runfun);


// Practise Qs 3 

function repeatFunction(repeat, rep) {
    for (let j = 1; j <= rep; j++) {
        repeat();
    }
}

let repeat = function () {
    console.log("repeat messages");
}

repeatFunction(repeat, 3);


