// Question 1 - for loop

console.log("Odd Numbers");
for (let odd = 1; odd <= 20; odd += 2) {
    console.log(odd);
}

console.log("Even Numbers");
for (let even = 0; even <= 20; even += 2) {
    console.log(even);
}


// Question 2 - Multiplication Table

// let user = prompt("Write your number");
// user = parseInt(user);

// for (let table = 1; table <= 10; table += 1) {
//     console.log(`${user} x ${table} = ${user * table}`);
// }



// Table of 5 


for (let x = 7; x <= 70; x += 7) {
    console.log(x);
}

// let u = prompt("Type number here");
// u = parseInt(u);

// for (let n = 1; n <= 10; n += 1) {
//     console.log(`${u} x ${n} = ${u * n}`);
// }



// Question 3 

console.log("Infinite loop");
let w = 1;
while (w <= 10) {
    console.log(w);
    w++;  // agr w++ bhol jaon ga infinile loop chal jaye ga 
}


// Question 5 - Loops with Arrays
// for loops 

let favMovie = ["alpha", "bravo", "charli", "ehdy wafa", "sinfe ahan"];
for (let f = 0; f <= favMovie.length; f++) {
    console.log(f, favMovie[f]);
}


// while loops 

let favMov = ['Army', 'Navy', 'AirForce', 'FC', 'Rangers'];
let wm = 0;
while (wm <= favMov.length) {
    console.log(wm, favMov[wm]);
    wm++;
}


// Question 5 - Infinite loop 

let i = 3;
while (i >= 2) {
    if (i == 8) {
        break;
    }
    console.log(i);
    i++;
}


// Question 6 - Nested for loop 

for (let rows = 1; rows <= 5; rows++) {
    let star = "";
    for (let col = 1; col <= 5; col++) {
        star += "* ";
    }
    console.log(star);
}


// Question 7 - Loops with Arrays 

let students = [["Ali", 85], ["Sara", 92], ["Bilal", 78], ["Zara", 95]];
for (let std = 0; std < students.length; std++) {
    console.log("Name:", students[std][0], "Marks:", students[std][1]);

    if (students[std][1] > 90) {
        console.log(students[std][1]);
    }
}

