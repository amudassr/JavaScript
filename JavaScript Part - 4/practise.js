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


// Question 7 - Loops with Array 

console.log("Employee Salary");
let employee = [["Hasan", 75000], ["Omer", 80000], ["Yasir", 100000], ["Hamza", "120000"]];
for (let emp = 0; emp < employee.length; emp++) {
    console.log(employee[emp][0], employee[emp][1]);

    if (employee[emp][1] > 100000) {
        console.log(employee[emp][0]);
    }
}


// Question 8 

console.log("Sports Man");
let sportsMan = [["Babar", 56], ["Saim", 63], ["Hassan", 32], ["Fakhar", 39]];
for (let sport = 0; sport < sportsMan.length; sport++) {
    console.log(sportsMan[sport][0], sportsMan[sport][1]);

    if (sportsMan[sport][1] > 32) {
        console.log(sportsMan[sport][0]);
    }
}



// Nested Array with Nested Loops 

let developer = [["Mudassir", "Hamza", "Anas"], ["Muhammad", "Wasiq", "Maaz"]];
for (let frontend = 0; frontend < developer.length; frontend++) {
    console.log(`Name:${frontend}`);
    for (let backend = 0; backend < developer[frontend].length; backend++) {
        console.log(developer[frontend][backend]);
    }
}


// karachi restaurant

console.log("Karachi Restaurant")
let restaurant = [["Ali", "Hamza", "Hasan"], ["Yasir", "Wahab", "Haseeb"], ["Sami", "Faiz", "Omer"]];
for (let table = 0; table < restaurant.length; table++) {
    console.log(`Table #${table + 1}`);
    for (let customer = 0; customer < restaurant[table].length; customer++) {
        console.log(" Customers: " + restaurant[table][customer]);
    }
}


// University 

console.log("University Students")
let universty = [["Ahmed Awais", "Muhammad Usman", "Faiz Ahmed"], ["Ahmer Bangro", "Umer Imran", "Fahad Bajwa"]];
for (let dept = 0; dept < universty.length; dept++) {
    console.log(`Depart #${dept + 1} `);
    for (let std = 0; std < universty[dept].length; std++) {
        console.log(" Student: " + universty[dept][std]);
    }
}


// Shopping Mall 

console.log("Shopping Mall");
let mall = [["Nike", "Puma", "Adidas"], ["J.", "Alkaram", "Gul Ahmed"], ["Zara", "Saya", "Dior"]];
for (let floor = 0; floor < mall.length; floor++) {
    console.log(`floor ${floor + 1}`);
    for (let shop = 0; shop < mall[floor].length; shop++) {
        console.log(`shop = ${shop}, ${mall[floor][shop]}`);
    }
}


