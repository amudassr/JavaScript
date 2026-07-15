// this keyword 

let students = {
    name: "Taha",
    age: 22,
    eng: 90,
    math: 80,
    phy: 90,
    getMarks() {
        let res = (this.eng + this.math + this.phy) / 3;
        return (`${this.name} got ${res} % marks in his final exams.`);
    }
}

console.log(students.getMarks());


// try & catch 

console.log("hello world");
console.log("hello world");
let a = 4;
try {
    console.log(a);
} catch (err) {
    console.log("error catch a is not define.")
    console.log(err);
}
console.log("hello world");
console.log("hello world");


// Normal function 

function sum(a, b) {
    return a + b;
}

console.log(sum(4, 6));


// Arrow function 

let add = (a, b) => {
    return a + b;
}

console.log(add(3, 2));

// take square root 

let square = (x) => {
    return x * x;
}

console.log(square(3));


// take cube root 

let cube = (x) => {
    return x * x * x;
}

console.log(cube(4));


// Implicit function

let sub = (a, b) => (
    a - b
);

console.log(sub(6, 5));


let mul = (a, b) => (
    a * b
);

console.log(mul(6, 4));


// Set TimeOut function 

console.log("Yesterday was tuesday");

setTimeout(()=>{
    console.log("Today is Wednesday");
}, 4000);

console.log("Tomorrow is Thursday");


// Set Interval function 

let id = setInterval(()=>{
    console.log("Rainy Day");
}, 2000);

console.log(id);

// manually stop:   

// clearInterval(id);

