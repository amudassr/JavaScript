// Question No 1 

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}


console.log(arr);


// Question No 2 

let number = 287152;
let count = 0;
let copy = number;

while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}

console.log(count);


// Another Method 

let str = ("58599122");
let result = str.length;
console.log(result);


// Question 3 

let newNum = 287153;
let sum = 0;
let newCopy = newNum;

while (newCopy > 0) {
   let digit = newCopy % 10;
    sum += digit;
    newCopy = Math.floor(newCopy / 10);
}

console.log(sum);


// Questio No 4 

let n = 6;
let factorial = 1

for (let f = 1; f <= n; f++) {
    factorial *= f;
}
console.log(`factorial of ${n} is ${factorial}`);


// Question No 5 

let lar = [10, 2, 45, 78, 23, 56];
let largest = lar[0];

for (let l = 0; l < lar.length; l++) {
    if (lar[l] > largest) {
        largest = lar[l];
    }
}
console.log(largest);