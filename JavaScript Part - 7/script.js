// this keyword 

let students = {
    name: "Muhammad",
    age: 22,
    eng: 91,
    math: 93,
    sci: 95,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.sci) / 3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
}

students.getAvg();


// try & catch 

console.log("hello");
console.log("hello");
try {
    console.log(a);
} catch (err) {
    console.log("caught an error... a is not define");
    console.log(err);
}

console.log("hello2");
console.log("hello2");
console.log("hello2");


// Arrow Functions 

const sum = (a, b) => {
    return a + b;
}

console.log(sum(2, 5));


const cube = (n) => {
    return n * n * n;
}

console.log(cube(3));

const pow = (a, b) => {
    return a ** b;
}

console.log(pow(3, 3));

// Normal function 

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// Arrow function 

let sumAdd = (a, b) => {
    return a + b;
}

console.log(sumAdd(3, 3));


// Implicit Return in Arrow Functions 

let mul = (a, b) => (
    a * b
);

console.log(mul(2, 4));


// Set timeout 

console.log("Hi there!");

setTimeout(() => {
    console.log("My Coading Journey");
}, 4000);

console.log("Welcome to");


