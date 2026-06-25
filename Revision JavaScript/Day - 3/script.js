// for loop 

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let j = 5; j >= 1; j--) {
    console.log(j);
}

// print odd number 

console.log("Odd numbers");

for (let k = 1; k <= 15; k = k + 2) {
    console.log(k);
}

console.log("backward print");

for (let l = 15; l >= 1; l = l - 2) {
    console.log(l);
}


// print even number

console.log("Even numbers")

for (let n = 2; n <= 20; n = n + 2) {
    console.log(n);
}

console.log("Backward numbers");

for (let m = 20; m >= 2; m = m - 2) {
    console.log(m);
}


// infinite loop 

// for(let inf = 1; inf>=0; inf++){
//     console.log(inf);
// }

// for(let infLoop = 1; infLoop <=5; infLoop--){
//     console.log(infLoop);
// }

// for(let ifl = 1; ; ifl++){
//     console.log(ifl);
// }


// Print Multiplication Table

console.log("Multipication Table");

// let table = prompt("enter your number");
// table =parseInt(table);
// for (let t = table; t <= table*10; t = t + table) {
//     console.log(t);
// }


// Nested loops 

console.log("Nested loops");

for (let a = 1; a <= 3; a++) {
    console.log(`outer loop: ${a}`);
    for (let b = 1; b <= 3; b++) {
        console.log(b);
    }
}

// while loop 
console.log("while loop");

let w = 0;
while (w <= 20) {
    console.log(w);
    w++;
}

console.log("Backward while loop");
let wl = 10;
while (wl >= 1) {
    console.log(wl);
    wl--;
}

console.log("Even Numbers");

let el = 0;
while (el <= 20) {
    console.log(el);
    el = el + 2;
}


console.log("Odd Numbers");

let on = 1;
while (on <= 20) {
    console.log(on);
    on = on + 2;
}

console.log("Backward Odd Numbers");

let backloop = 15;
while (backloop >= 1) {
    console.log(backloop);
    backloop = backloop - 2;
}


// Practise Qs - Favourite Movie

// let favMovie = "pakistan";
// let guess = prompt("Enter you favoutite movie");
// while ((guess != favMovie) && (guess != "quit")) {
//     guess = prompt("wrong guess. please try agin");
// }
// if (guess == favMovie) {
//     alert("Congates!! you guess the movie.")
// } else {
//     alert("you Quit the game.");
// }


// Q1. Number Guessing Game

// let secretNum = 7;
// let guessNum = prompt("Enter your favourite number");
// // let secNum = parseInt(guessNum);
// while ((secretNum != guessNum) && (guessNum != "quit")) {
//     guessNum = prompt("wrong number. Please try again");
//     // secNum = parseInt(secNum);
// }
// if (secretNum == guessNum) {
//     alert("Congrates!! you guess the number.");
// } else {
//     alert("you quit the game");
// }

// Q2. Password Lock System

// let correctPass = "admin123";
// let attempts = 0;
// let guessPass = prompt("Guess the password");
// while ((guessPass != correctPass) && (attempts < 3)) {
//     guessPass = prompt('wrong password. try again');
//     attempts++;
// }
// if (guessPass == correctPass) {
//     alert('Access Granted');
// } else {
//     alert('Locked Out!');
// }


// Q3. Capital City Quiz

// let pakCapital = "ISLAMABAD";
// let guessCapital = prompt("Enter the capital of pakistan");
// while (guessCapital != pakCapital) {
//     if (guessCapital == 'quit') {
//         console.log('you quit the capital game.');
//         break;
//     }
//     guessCapital = prompt("wrong capital. please try again");
// }
// if (guessCapital === pakCapital) {
//     alert("Congrates! you guess the capital.")
// }


// Q5. Login Attempt Limiter 

// let userName = "Ali Hassan";
// let chance = 0;
// let guessUserName = prompt("Guess the User Name");
// while ((guessUserName != userName) && (chance < 4)) {
//     guessUserName = prompt("wrong username. try again:");
//     chance++;
// }
// if (guessUserName == userName) {
//     alert(`Welcome ${userName}`);
// } else {
//     alert('Account Blocked!');
// }


console.log("Break keywoard");

let br = 1;
while (br <= 5) {
    if (br == 4) {
        break;
    }
    console.log(br);
    br++;
}


// loops with Array 
console.log('loops with Array');

let fruits = ['mango', 'apple', 'orange', 'grapes', 'banana'];
for (let f = 0; f < fruits.length; f++) {
    console.log(f, fruits[f]);
}

let cars = ['bmw', 'xuv', 'toyota', 'honda', 'suzuki'];
for(let c= 0; c<cars.length; c++){
    console.log(c, cars[c]);
}