console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");


// for loop

//  Basic Counter

console.log("Counter Forwards");

for (let i = 1; i <= 10; i++) {
    console.log(i);
};

console.log("Counter Backwards")

for (let j = 10; j >= 1; j = j - 2) {
    console.log(j)
};


// Odd Numbers 

console.log("Odd Forwards");
for (let k = 1; k <= 10; k = k + 2) {
    console.log(k);
}

console.log("Odd Backwards");

for (K = 9; K >= 1; K = K - 2) {
    console.log(K);
}


// Even Numbers 

console.log("Even Forwards");

for (let l = 2; l <= 10; l = l + 2) {
    console.log(l);
};

console.log("Even Backwards");

for (let m = 10; m >= 1; m -= 2) {
    console.log(m);
}

// Infinite Loops 


// for(let n =1; n>=0; n++) {
//     console.log();
// }


// for(let p = 1; p<=5; p--) {
//     console.log(p);
// }


// for(let q =1; ; q++) {
//     console.log(q);
// }


// Print Multiplication Table  

// Print Table of 2
console.log("Table of 2");

for (let t = 2; t <= 20; t += 2) {
    console.log(t);
}


// Table of 5 
console.log("Table of 5");

for (let x = 5; x <= 50; x += 5) {
    console.log(x);
}

// Table of 10 
console.log("Table of 10");

for (let y = 10; y <= 100; y += 10) {
    console.log(y);
};


// parseInt 

let str = "42";
console.log(typeof str);

let num = parseInt(str);
console.log(typeof num);



// let user = prompt("wirte your number");
// console.log(typeof user);

// let userPro = parseInt(user);
// console.log(userPro);
// console.log(typeof userPro);



// Table User Choise 

// console.log("Table of your choise");

// let n = prompt("write your number");
// n = parseInt(n);

// for (let a = n; a <= n * 10; a += n) {
//     console.log(a);
// };




// Nested Loop 

for (let q = 1; q <= 3; q++) {
    console.log(`outer loop ${q}`);
    for (let s = 1; s <= 3; s++) {
        console.log(s);
    }
}


// Example 1 

for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log(`Row ${row} : Col ${col}`);
    }
}


// Example 2

for (let tab = 1; tab <= 3; tab++) {
    for (let inner = 1; inner <= 3; inner++) {
        console.log(`${tab} x ${inner} = ${tab * inner}`);
    }
    console.log("---");
}


console.log("While Loop");



// While Loop 

// Forward 

let w = 1;
while (w <= 5) {
    console.log(w);
    w++;
}

console.log("Backward");

// Backward 

let v = 5;
while (v >= 1) {
    console.log(v);
    v--;
}

console.log("0 to 20")

let zero = 0;
while (zero <= 20) {
    console.log(zero);
    zero++;
}

console.log("even number");

let even = 0;
while (even <= 20) {
    console.log(even);
    even += 2;
}


console.log("Odd number");

let odd = 1;
while (odd <= 20) {
    console.log(odd);
    odd += 2;
}


// Favourite Movie 

// let favMovie = "parwaaz";
// let guessMovie = prompt("Enter you guess");

// while (favMovie != guessMovie) {
//     if (guessMovie == "quit") {
//         console.log("you quit");
//         break;
//     }
//     guessMovie = prompt("Wrong guess. please try again");
// }

// if (guessMovie == favMovie) {
//     console.log("congrats!! guess match")
// }


// Number Guessing Game

// const luckyNum = 7;
// let guessNum = prompt("Guess the lucky number");


// while( (luckyNum != parseInt(guessNum)) && (guessNum != "quit")) {
//    guessNum = prompt("Better luck next time");
// }

// if(luckyNum == parseInt(guessNum)) {
//     console.log("You got it!");
// }



// Password Checker 

// const secPassword = "Mudassir@123";
// let userPassword = prompt("Enter your password");
// let attempts = 1;

// while (secPassword != userPassword && attempts < 3) {
//     attempts++;
//     let remaining = 3 - attempts;
//     userPassword = prompt("Wrong! " + remaining + " attempts left:");
// }

// if (userPassword == secPassword) {
//     console.log("Access granted");
// } else {
//     console.log("Account locked");
// }


console.log("break")

// break 

let b = 1;
while (b <= 5) {
    if (b == 3) {
        break;
    }
    console.log(b);
    b++;
}

console.log("we use break at 3");


let xyz = 1;
while (xyz <= 5) {
    if (xyz == 4) {
        break;
    }
    console.log(xyz);
    xyz++;
}


// Loops with Array 


// For Fruits 

let fruits = ["apple", "mango", "banana", "orange", "litchi", "grapes"];

for (let f = 0; f <= fruits.length; f++) {
    console.log(f, fruits[f]);
}

// For Months 

let months = ["january", "febuary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

for (let mnth = 0; mnth <= months.length; mnth++) {
    console.log(mnth, months[mnth]);
}


// For Subjects 

let subj = ["math", "eng", "sci", "pst", "phy", "chem"];

for (let s = 0; s <= subj.length; s++) {
    console.log(s, subj[s]);
}


// For Friends 

let friends = ["Hamza", "Hassan", "Younas", "Yaqoob"];
for (let fr = 0; fr <= friends.length; fr++) {
    console.log(fr, friends[fr]);
}


let cars = ["bmw", "suv", "mercedes", "toyota", "honda"];
for (let ca = 0; ca <= cars.length; ca++) {
    console.log(ca, cars[ca])
}



// Loops with Nested Arrays 

let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder women", "flash"]
]

for (let h = 0; h < heroes.length; h++) {
    console.log(h, heroes[h], heroes[h].length);
    for (let j = 0; j < heroes[h].length; j++) {
        console.log(`j=${j}, ${heroes[h][j]}`);
    }
}

