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

console.log(students.getAvg());


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

// console.log("Hi there!");

// setTimeout(() => {
//     console.log("My Coading Journey");
// }, 4000);

// console.log("Welcome to");


// Set Interval 

// let id = setInterval(() => {
//     console.log("Runs again & again every 2 seconds");
// }, 2000);

// console.log(id);


// this in arrow function 

const student = {
    name: "aman",
    marks: 89,
    prop: this,  // global scope 
    getName() {
        return this.name;
    },
    // getMarks: () => {
    //     console.log(this);  // parent's scope -> window
    //     return this.marks;
    // },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this);  // parent  -> student
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this);  // 
        }, 2000);
    },
};

console.log(student);
console.log(student.getName());
// console.log(student.getMarks());


// Practise Qs 

// Qs : 1

let sqfunc = (n) => {
    return n * n;
}

console.log(sqfunc(4));


// Qs : 2 

// let id = setInterval(() => {
//  console.log("Hello World");
// }, 2000);


setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval run");
}, 10000);

