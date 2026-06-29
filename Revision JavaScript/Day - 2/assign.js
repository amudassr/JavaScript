// Practise Qs 1 

let arr = [7, 9, 0, -2];
let n = 3
console.log(arr.slice(0, n));


// Practise Qs 2 

let lastArr = [7, 9, 0, -2];
let x = 3;

console.log(lastArr.slice(lastArr.length - x));


// Practise Qs 3 

let str = "";
if (str.length == 0) {
    console.log("string is blank");
} else {
    console.log("string is not blank");
}


// Practise Qs 4 

let char = "MuHammaD";
let idx = 2;

if (char[idx] == char[idx].toLowerCase()) {
    console.log("It is Lower Case");
} else {
    console.log("It is Upper Case");
}


// Practise Qs 4 

let text = prompt("Please send a text message");
console.log(text.trim());



// Practise Qs 5 

let checkArr = ["ali", 7, 8, 2, 0];
let item = "ali";

if(checkArr.indexOf(item) != -1){
    console.log("element exists in array")
} else {
    console.log("element doesn't exists in array")
}
