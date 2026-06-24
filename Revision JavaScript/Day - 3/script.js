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