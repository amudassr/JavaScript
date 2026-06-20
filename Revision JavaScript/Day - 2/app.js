// Practise Qs : 1 

let arr = [7, 9, 0, -2];
let n = 3
console.log(arr.slice(0, n));


// Practise Qs : 2 

let posArr = [7, 9, 0, -2];
let pos = 3;
console.log(posArr.slice(posArr.length - pos, posArr.length));


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
let char = newStr[index];

if (char === char.toLowerCase()) {
    console.log("it is Lowercase");
} else {
    console.log("it is Uppercase");
}


// Practise Qs : 5 

let mssg = "      Hello World!         ";
let mssgRes = mssg.trim();
console.log(mssgRes);


// Practise Qs : 6 

let arrCheck = [7,9,0,-2];
let result = arrCheck.includes(9);
console.log(result);