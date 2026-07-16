// JS (Part 2) Practise Questions

// Qs : 1 

let num = 50;

if (num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
};


// Qs : 2 

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`${name} is ${age} years old.`);


// Qs : 3

let monthsQuarter = 4;
switch (monthsQuarter) {
    case 1:
        console.log("January, Febuary, March");
        break;

    case 2:
        console.log("April, May, June");
        break;

    case 3:
        console.log("July, August, September");
        break;

    case 4:
        console.log("October, November, December");
        break;

    default: {
        console.log("Invalid Quarter");
    }
}


// Qs : 4

let str = 'apple';

if ((str[0] == 'A' || str[0] == 'a') && (str.length >= 5)) {
    console.log("Golden string");
} else {
    console.log("not a golden string");
};


// Qs : 5

let a = 5;
let b = 10;
let c = 15;

if (a > b) {
    console.log(a);
} else if (a > c) {
    console.log(b);
} else {
    console.log(c);
}


// Qs : 6

let num1 = 32;
let num2 = 47852;

if ((num1 % 10) == (num2 % 10)) {
    console.log("numbers have the same last digit which is", num1 % 10);
} else {
    console.log("numbers don't have the same last digit")
};



// JS (Part 3) Practise Questions

// Qs : 1

let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);


// Qs : 2

let ans2 = arr.slice(arr.length - n)
console.log(ans2);


// Qs : 3

// let strBlank = prompt("Enter a string");

// if (strBlank.length == 0) {
//     console.log("string is blank");
// } else {
//     console.log("string is not blank");
// }




// Qs : 4

let char = "Pakistan";
let idx = 0;

if (char[idx] == char[idx].toLowerCase()) {
    console.log("lowercase");
} else {
    console.log("uppercase");
}


// Qs : 5

// let strSpace = prompt("Enter a string");
// let space = strSpace.trim().toUpperCase();
// console.log(space);


// QS : 6

let arrExists = ['hello', 'a', 20, 2, 29, 34];
let element = 2;

if (arrExists.includes(element)) {
    console.log("element exists in array");
} else {
    console.log("element does n't exists in array");
}



// JS (Part 4) Practise Questions


// Qs : 1 

let givenArr = [1, 2, 3, 4, 5, 6, 2, 3];
let delNum = 2;
let resultArr = [];

for (let g = 0; g < givenArr.length; g++) {
    if (givenArr[g] != delNum) {
        resultArr.push(givenArr[g]);
    }
}

console.log(resultArr);


// Qs : 2 

let number = 987654987;
let count = 0;

for (let c = 0; number > 0; c++) {
    number = Math.floor(number / 10);
    count++;
}

console.log(count);


// Qs : 3 

let sumNum = 2871525;
let sum = 0;

for (let s = 0; sumNum > 0; s++) {
    sum = sum + (sumNum % 10);
    sumNum = Math.floor(sumNum / 10);
}

console.log(sum);


// Qs : 4 

let x = 6;
let fac = 1;

for (let f = 1; f <= x; f++) {
    fac = f * fac;
}

console.log(fac);


// Qs : 5

let larArr = [5, 10, 15, 20, 25, 30];
let largest = [];

for (let l = 0; l < larArr.length; l++) {
    if (larArr[l] > largest) {
        largest = larArr[l];
    }
}

console.log(largest);




// JS (Part 5) Practise Questions


// Qs : 1

// dice roll print 

let dice = 6;
let res = Math.floor(Math.random() * 6 + 1);
console.log(res);

// random numner print 

let random = Math.floor(Math.random() * 46 + 40);
console.log(random);


// Qs : 2

let car = {
    name: "AQua",
    model: "2021",
    color: "Silver"
};

console.log(car.color = "Black");
console.log(car);


// Qs : 3

let person = {
    name: "Taha",
    age: 22,
    city: "Karachi"
};

console.log(person);
console.log(person.city = "New York");
console.log(person);
console.log(person.country = "United States");
console.log(person);




// JS (Part 6) Practise Questions


// Qs : 1 


let largerArr = [10, 12, 18, 24, 28, 34, 40, 44];
let numb = 25;

function largerNumber(largerArr) {
    let large = [];
    for (let l = 0; l < largerArr.length; l++) {
        if (largerArr[l] > numb) {
            large.push(largerArr[l]);
        }
    }

    return large;
}

console.log(largerNumber(largerArr));


// Qs : 2 

let character = "abcdabcdefffgh";

function getCharacter(character) {
    let string = "";
    for (let s = 0; s < character.length; s++) {
        if (!string.includes(character[s])) {
            string += character[s];
        }
    }

    return string;
}

console.log(getCharacter(character));


// Qs : 3

let countries = ["Pakistan", "India", "Iran", "Afghanistan"];

function longestCountry(countries) {
    let longCountry = [];
    for (let c = 0; c < countries.length; c++) {
        if (countries[c].length > longCountry.length) {
            longCountry = countries[c];
        }
    }

    return longCountry;
}

console.log(longestCountry(countries));


// Qs : 4

let mssg = "Assalamualaikum";
let countVow = 0;

function countVowels(mssg) {
    let vowels = "aeiou";
    for (let v = 0; v < mssg.length; v++) {
        if (vowels.includes(mssg[v])) {
            countVow++;
        }
    }

    return countVow;
}

console.log(countVowels(mssg));


// Qs : 5 

function randomNumber(start, end) {
    let diff = end - start;
    let random = Math.random() * diff + start;
    return random;
}

console.log(randomNumber(5, 15));