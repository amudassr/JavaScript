// Practise Qs : 1 

let arr = [7, 9, 0, -2];
let n = 3
console.log(arr.slice(0, n));


// Practise Qs : 2 

let posArr = [7, 9, 0, -2];
let pos = 3;
console.log(posArr.slice(posArr.length - pos));


// Practise Qs : 3

let str = "";
if (str.length == 0) {
    console.log("string is empty");
} else {
    console.log("string is not empty");
}


// Practise Qs : 4 

let newStr = "Hello";
let index = 0;

if (newStr[index] == newStr[index].toLowerCase()) {
    console.log("it is Lowercase");
} else {
    console.log("it is Uppercase");
}


// Practise Qs : 5 

let mssg = "      Hello World!         ";
let mssgRes = mssg.trim();
console.log(mssgRes);


// Practise Qs : 6 

let arrCheck = [7, 9, 0, -2];
let result = arrCheck.includes(9);
console.log(result);


// let arrCheck = [7, 9, 0, -2];
// let result = arrCheck.includes(8);
// console.log(result);


// Question 1  
let posArr1 = [7, 9, 0, -2];
let m = 2;
let resPosArr = posArr1.slice(0, m);
console.log(resPosArr);


// Question 2
let lastArr1 = [7, 9, 0, -2];
let l = 3;
let resLastArr = lastArr1.slice(lastArr1.length - l);
console.log(resLastArr);


// Question 3 
let blnkStr = "";
if (blnkStr.length === 0) {
    console.log("string is blank");
} else {
    console.log("string is not blank");
}


// Question 4
let char = "Muhammad";
let charInd = 0;

if (char[charInd] === char[charInd].toLowerCase()) {
    console.log("it is lowercase");
} else {
    console.log("it is uppercase");
}


// Question 5 

// let helloMssg = prompt("Enter your wishes");
// let mssgDay = helloMssg.trim();
// console.log(mssgDay);


// Question 6 

let text = ["ali", "hamza", "afan", "muhammad"];
let textRes = text.includes("muhammad");
console.log(textRes);