// String Methods 

// trim method 

let mssg = "    hello    ";
console.log(mssg.trim());


// let name = prompt("enter your name");
// console.log(name.trim());

// let pass = prompt("enter your password");
// let newPass = pass.trim();
// console.log(newPass);


// Immutable strings in js


// ToUpperCase and ToLowerCase 

let firstName = "Muhammad";
let modifyUpper = firstName.toUpperCase();
let modifyLower = firstName.toLowerCase();

console.log(modifyLower);
console.log(modifyUpper);
console.log(firstName);


// Methods with Arguments - indexOf 

let str = "ILoveCoading";
let newStr = str.indexOf("Coading");
console.log(newStr);

let text = "welcome";
let newText = text.indexOf("z");
console.log(newText);


// Method Chaining 

let message = ("Muhammad");
let newMessage = message.trim().toUpperCase();
console.log(newMessage);



// Slice Method 

let res = "Destinction";
let newRes = res.slice(0, 3);

// let newRes = res.slice(3);
// let newRes = res.slice(3, res.length);
// let newRes = res.slice(3, 11);

// let newRes = res.slice(-10);
console.log(newRes);



// Replace & Repeat Method 

let rep = "IloveCoading";
// let newRep = rep.replace("love", "do");
let newRep = rep.replace("o", "x");
console.log(newRep);


// Repeat Method 

let fruit = "Mango";
let newFruit = fruit.repeat(4);
console.log(newFruit);



// Practise Qs : 1 

let msg = "help!";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);


// Practise Qs : 2 

let collegeName = "ApnaCollege";
// let collegeRes = collegeName.slice(4,11);
// let collegeRes = collegeName.indexOf("na");
let collegeRes = collegeName.replace("Apna", "Our");
console.log(collegeRes);



// Practise Qs : 3

collegeRes = collegeName.slice(4, collegeName.length).replace("l", "t").replace("l", "t");
console.log(collegeRes);


// Array 

let students = ["Abdullah", "Haider", "Ali", "Umer"];
console.log(students);
console.log(students.length);

let marks = [99, 85, 73, 68, 100];
console.log(marks);

// Mixed Array 
let info = ["hasan", 25, 6.1];
console.log(info);
console.log(info[0][0]);

// Empty Array 
let empArr = [];
console.log(empArr);


// Arrays are Mutable 

let fruits = ["mango", "apple", "orange"];
console.log(fruits);

fruits[0] = "banana";
console.log(fruits);

fruits[1] = "pinapple";
console.log(fruits);

fruits[5] = "grapes";
console.log(fruits);
console.log(fruits[0][0]);

fruits[8] = "papaya";
console.log(fruits);


// Array Methods 
// push method 

let cars = ["audi", "bmw", "xuv", "toyota"];
console.log(cars);
let newCars = cars.push("suzuki");
console.log(cars);

// pop method 

newCars = cars.pop();
console.log(newCars);
console.log(cars);

// unshift method 

newCars = cars.unshift("mercedes");
console.log(cars);

// shift method 

newCars = cars.shift();
console.log(newCars);
console.log(cars);


// Practise Qs : 1

let followers = ["Hamid", "Anas", "Taha"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

// Practise Qs : 2

let monthStart = ['january', 'july', 'march', 'august'];
let monthEnd = monthStart.shift();
monthEnd = monthStart.shift();
monthEnd = monthStart.unshift("june");
monthEnd = monthStart.unshift("july");
console.log(monthStart);


// Array Method - indexOf 

let primary = ["red", "yellow", "blue"];
let primaryColor = primary.indexOf("blue");
console.log(primaryColor);

// Array Method - includes 

let secondary = ["black", "white", "gray"];
let secondaryColor = secondary.includes("white");
console.log(secondaryColor);


// Concatenation  

let coloring = primary.concat(secondary);
console.log(coloring);


// Reverse 

let reverse = primary.reverse();
console.log(reverse);

console.log(primary);



// Slice in Arrays 

let engine = ["70cc", "100cc", "110cc", "125cc", "150cc", "200cc"];
console.log(engine.slice(2, 6));
console.log(engine.slice(4));
console.log(engine.slice(3, engine.length));
console.log(engine.slice(-2));
console.log(engine.length);
console.log(engine.slice());
console.log(engine.slice(-1));
console.log(engine);

// Splice in Arrays 

let browser = ["chrome", "safari", "edge", "mozila", "firefox"];
console.log(browser.splice(3));
console.log(browser);
console.log(browser.splice(1, 1));
console.log(browser);
console.log(browser.splice(0, 0, "mozila", "firefox"));
console.log(browser);
console.log(browser.splice(1, 2));
console.log(browser);
console.log(browser.splice(1, 0, "chrome"));
console.log(browser);
console.log(browser.splice(2, 1, "safari"));
console.log(browser);
console.log(browser.splice(1, 1));
console.log(browser);
console.log(browser.splice(0, 1, "edge"));
console.log(browser);
console.log(browser.splice(1, 0, "firefox"));
console.log(browser);


// Sort in Arrays

let subjects = ["science", "english", "maths", "physics", "urdu", "arabic"];
console.log(subjects.sort());
console.log(subjects);


// Practise Qs : 1 

let start = ['january', 'july', 'march', 'august'];
let final = start.splice(0, 2, "july", "june");
console.log(start);


// Practise Qs : 2 

let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(lang.reverse().indexOf('javascript'));