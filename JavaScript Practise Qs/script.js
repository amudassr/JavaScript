
// JS (Part 5) - Practice Questions


// Practise Qs 1 

let num = Math.floor(Math.random() * 16 + 5);
console.log(num);

// Practise Qs 2 

let car = {
    name: "Land Cruiser",
    model: 1989,
    color: "Perl White"
};

console.log(car.name);


// Practise Qs 3 

let person = {
    name: "Muhammad",
    age: 22,
    city: "Karachi"
}

console.log(person);
console.log(person.city = "New York");
console.log(person);
console.log(person.country = "United States");
console.log(person);


// JS (Part 4) - Practice Questions


// Practise Qs 4 

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let numm = 2;
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] != numm) {
        result.push(arr[i]);
    }
}

console.log(result);


// Practise Qs 5 

// 1st Method 
let numCount = "287152";
console.log(numCount.length);


// 2nd Method 
let newNum = 287152;
let count = 0;

while (newNum > 0) {
    newNum = Math.floor(newNum / 10);
    count++
}

console.log(count);


// Practise Qs 6

let numSum = 124456;
let sum = 0;

while (numSum > 0) {
    sum = sum + (numSum % 10);
    numSum = Math.floor(numSum / 10);
}

console.log(sum);


// Practise Qs 7 

let n = 12;
let res = 1;

for (let f = 1; f <= n; f++) {
    res = res * f;
}

console.log(res);



// Practise Qs 8 

let posArr = [12, 14, 34, 9, 17, 21];
let largest = [];

for (let l = 0; l < posArr.length; l++) {
    if (posArr[l] > largest) {
        largest = posArr[l];
    }
};

console.log(largest);


// JS (Part 3) - Practice Questions


// Practise Qs 9 

let pos = [7, 9, 0, -2];
let x = 3;
let ans = pos.slice(0, x);
console.log(ans);


// Practise Qs 10 

let newPos = [7, 9, 0, -2];
let y = 3;

let answer = newPos.slice(newPos.length - y);
console.log(answer);


// Practise Qs 11 

let str = prompt("please enter a string");
if (str.length == 0) {
    console.log("string is blank");
} else {
    console.log("string is not blank");
};


// Practise Qs 12 

let char = "Pakistan";
let idx = 0;

if (char[idx] == char[idx].toLowerCase()) {
    console.log("lowercase");
} else {
    console.log("uppercase");
}


// Practise Qs 13 

let space = prompt("please enter a string");
let strRes = space.trim().toUpperCase();
console.log(strRes);



// Practise Qs 14

let exists = ["hello", 'a', 93, 44, 5, 17]; 
let item = '64';

if(exists.includes(item)){
    console.log("Element exists in the array");
} else {
    console.log("Element does n't exists in the array");
}