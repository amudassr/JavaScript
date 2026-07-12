// Practise Qs 1 
let arr = [2, 4, 6, 8, 10, 12];
let num = 7;

function largerThen() {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(largerThen());


// Practise Qs 2

let str = "xyzxyzuvw";

function getUnique(str) {
    let seen = "";
    for (let s = 0; s < str.length; s++) {
        if (!seen.includes(str[s])) {
            seen += str[s];
        }
    }

    return seen;
}

console.log(getUnique(str));


// Practise Qs 3 

let countries = ["Australia", "Germany", "United States"];

function longestCountry(countries) {
    let longest = "";
    for (let c = 0; c < countries.length; c++) {
        if (countries[c].length > longest.length) {
            longest = countries[c];
        }
    }

    return longest;
}

console.log(longestCountry(countries));


// Practise Qs 4

let sentence = "Hello world";

function countVowels(sentence) {
    let vowels = "aeiou";
    let countVow = 0;
    for (let v = 0; v < sentence.length; v++) {
        if (vowels.includes(sentence[v])) {
            countVow++;
        }
    }

    return countVow;
}

console.log(countVowels(sentence));