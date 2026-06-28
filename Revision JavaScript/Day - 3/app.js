// Practise Qs 1 

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
let res = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] != num) {
        res.push(arr[i]);
    }
}

console.log(res);


// Practise Qs 2 

let number = 28715211;
let count = 0;
let copy = number

while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}

console.log(count);



// Practise Qs 3

let numy = 1255287;
let sum = 0;
let digit = numy;

while (digit > 0) {
    let math = digit % 10;
    sum += math;
    digit = Math.floor(digit / 10);
}

console.log(sum);



// Practise Qs 4

let factorial = 7;
let result = 1;

for (let f = 1; f <= factorial; f++) {
    result *= f;
}

console.log(`Factorial of ${factorial} is: ${result}`);



// Practise Qs 5

let lar = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for (let l = 0; l < lar.length; l++) {
    if (largest < lar[l]) {
        largest = lar[l];
    }
}

console.log(largest);



// Practise Qs 6 

let small = [5, 10, 4, 5, 7, 3, 9]
let smallest = small[0];

for (let s = 0; s < small.length; s++) {
    if (smallest > small[s]){
    smallest = small[s];
}
}
console.log(smallest);
