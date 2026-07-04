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

function sumNum(a, b) {
    return (a + b);
}


// let sumRes = sumNum(2, 3);
// console.log(sumRes);

console.log(sumNum(7, 10))