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

