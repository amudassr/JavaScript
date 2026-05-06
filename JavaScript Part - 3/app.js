// Practise Qs 1

let arr = [7, 9, 0, -2];
let n = 3;

let newArr = arr.slice(0, n);
console.log(newArr);


// Practise Qs 2

arr = [7, 9, 0, -2];
let x = 3;

let againArr = arr.slice(arr.length - x);
console.log(againArr);


// Practise Qs 3

// let str = prompt("enter a string");
// if (str.length == 0) {
//     console.log("string is empty");
// } else {
//     console.log("string is not empty");
// }


// Practise Qs 4

let char = "MuhaMMaD";
let idx = 7;

if (char[idx] == char[idx].toLowerCase()) {
    console.log("character is lowercase");
} else {
    console.log("character is not lowercase")
}


// Practise Qs 5

let age = prompt("please enter your age");
console.log(`original age = ${age} `);
console.log(`age without spacing ${age.trim()}`);


// Practise 6


let numbers = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if(numbers.indexOf(item)  !=-1){
    console.log("element exist in array");
}
else {
    console.log("element doesn't exist in array");
};

// Practise Qs 6 - Using includes 

let arrNum = ["world", 'b', 46, 65, 97, -4];
let arrItem = 53;
if(arrNum.includes(arrItem)){
    console.log("element includes in array");
}

else {
    console.log("element doesn't include in array");
};

