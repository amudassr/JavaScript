// Practise Qs 1 

let arr = [10, 12, 14, 16, 18, 20, 22, 24];
let num = 15;

function larger(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(larger(arr));

// Practise Qs 2

let str = "xyzxyzuvw";

function getCharacter(str) {
    let ans = "";
    for (let s = 0; s < str.length; s++) {
        if (!ans.includes(str[s])) {
            ans += str[s];
        }
    }

    return ans;
}

console.log(getCharacter(str));


// Practise Qs 3 

let countries = ["Australia", "Germany", "United States of America"];

function longestCountry(countries) {
    let longest = [];
    for (let c = 0; c < countries.length; c++) {
        if (countries[c].length > longest.length) {
            longest = countries[c];
        }
    }

    return longest;
}

console.log(longestCountry(countries));


// Practise Qs 4

let name = "Muhammad Mudassir";

function countVow(name) {
    let vowels = 'aeiou';
    let countVow = 0;
    for (let v = 0; v < name.length; v++) {
        if (vowels.includes(name[v])) {
            countVow++;
        }
    }

    return countVow
}

console.log(countVow(name));


// Practise Qs 5 

function randomNum(start, end) {
    let random = Math.random() * (end - start) + start;
    return random;
}

console.log(randomNum(5, 11));