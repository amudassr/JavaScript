// Functions in JS 

function hello() {
    console.log("Welcome Hello");
}


hello();

function rand() {
    let random = Math.floor(Math.random() * 100 + 1)
    console.log(random)
}
rand();

// Function with arguments 

function printData(name, age, gender) {
    console.log(name, age, gender);
}

printData("Hassan", 22, "Male");

// backticks 

function data(name, age, gender, quali) {
    console.log(`This is ${name} ${age} years old & my qualification is ${quali}.`);
}

data("Muhammad", 21, "Male", "BSCS");

// print table 

function printTabel(n) {
    for (let i = n; i <= n * 10; i = i + n) {
        console.log(i);
    }
}

printTabel(15);


// Sum two numbers 

console.log("Sum two numbers");

function sum(a, b, c) {
    let calSum = (a + b + c) / 5;
    console.log(calSum);
}

sum(5, 5, 5);


// function with Object 

function studentData(name, age, gender, qualification) {
    let studentInfo = {
        name: name,
        age: age,
        gender: gender,
        qualification: qualification
    }
    console.log(studentInfo);

}

studentData("Taha", 22, "Male", "Bachelor's in Computer Science");


// return keyword 

function sum(a, b) {
    return (a + b);
}

// let s = sum(3, 6);
// console.log(s);

console.log(sum(2, 6));

// console.log(sum(sum(3, 4), 3));


console.log("Sum of 1 to 10 Numbers");

// Practise Qs 

function getSum(n) {
    let newSum = 0;

    for (let s = 0; s <= n; s++) {
        newSum = newSum + s;
    }

    return newSum;
}

console.log(getSum(3));


// Practise Qs 

let str = ["i", "love", "my", "country"];

function concat(str) {
    let result = "";

    for (let k = 0; k < str.length; k++) {
        result += str[k];
    }

    return result;
}

console.log(concat(["Ali", 21, "Karachi", "SoftwareEng"]));



// Scope 

// Function Scope 

let add = 54;  // Global Scope

function calNum(a, b) {
    let add = a + b; // Function Scope
    console.log(add);
}

calNum(2, 3);
console.log(add);



// Block Scope 

// {
//     let a = 25;
// }

// console.log(a);


// for (let b = 1; b <= 5; b++) {
//     console.log(b);
// }

// console.log(b);


let age = 25;
if (age >= 18) {
    let str = "adult";
    console.log(str);
}


// Lexical Scope 

function outerFun() {
    let x = 5;
    let y = 6;
    function innerFun() {
        console.log(x);
        console.log(y);
    }
    innerFun();
}
outerFun();

// Practise Qs 

// function outer() {
//     function inner() {
//         let z = 10;
//         return z;
//     }

//     let result = inner();
//     console.log(result);
// }

// outer();


// Practise Qs 

let greet = "hello"  // global scope

function changeGreet() {
    let greet = "Assalam o Alaikum";  // function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet);  // lexical scope 
    }

    innerGreet();
}

console.log(greet);
changeGreet();


// Practise Qs : 1

let city = "karachi";

function showCity() {
    console.log(city);
}

console.log(city);

showCity();


// Practise Qs : 2

let newAge = 20

function updateAge() {
    let age = 25;
    console.log(age);
}

console.log(newAge);

updateAge();


// Practise Qs : 3 

let number = 100

function outer() {
    console.log(number);
    function middle() {
        console.log(number);
        function inner() {
            let number = 999;
            console.log(number);
        } inner();

    }
    middle();

}
outer();


// Practise Qs : 4 

let msg = "start";

function first() {
    let msg = "middle";
    console.log(msg);
    function second() {
        let msg = "end";
        console.log(msg);
    }
}

console.log(msg);

first();


// Function Expression 

console.log("Functions Expressions")

let numberSum = function (a, b) {
    return a + b;
}

console.log(numberSum(2, 5));


let hi = function () {
    return "hello!";
}

console.log(hi());


hi = function () {
    return "Good Evening!";
}

console.log(hi());


// Higher Order Functions 

function multipleGreet(func, n) {
    for (let m = 1; m <= n; m++) {
        func();
    }
}

let mssgGreet = function () {
    console.log("hello!");
}

multipleGreet(mssgGreet, 4);


// High Order Function (return) 

let request = "odd";  // odd

function oddOrEvenFactory(request) {
    if (request == "even") {
        return function (e) {
            return (e % 2 == 0);
        }

    } else if (request == "odd") {
        return function (o) {
            return (!(o % 2 == 0));
        }

    }
}

let func = oddOrEvenFactory(request);

console.log(func);
console.log(func(3));
console.log(func(8));

console.log(func);
console.log(func(9));
console.log(func(4));

