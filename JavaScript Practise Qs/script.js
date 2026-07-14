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


// Practise Qs 4 

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let number = 2;
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != number) {
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
let count = 0

while (newNum > 0) {
    newNum = Math.floor(newNum / 10);
    count++;
}

console.log(count);


// Practise Qs 6

let numSum = 287152;

while(numSum>0){
    let sum = (numSum%10);
    numSum = Math.floor(numSum/10);
    numSum++;
}

console.log(sum);