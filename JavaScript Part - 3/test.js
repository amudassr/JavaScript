// String Methods 

// Question 1 
let spaceName = "   Muhammad Mudassir        ";
console.log(spaceName);

let trimName = spaceName.trim();
console.log(trimName);


// Question 2 
let name = "muhammad mudassir";
console.log(name);

let upperName = name.toUpperCase();
console.log(upperName);

let lowerName = name.toLowerCase();
console.log(lowerName);


// Question 3
let coading = "I love coding in JavaScript";
let coadFind = coading.indexOf("coding");

console.log(coadFind);
console.log(coading.length);

coadFind = coading.indexOf("childhood");
console.log(coadFind);


// Question 4 
let message = "  hello world!  ";
console.log(message);
let messageResult = message.trim().toUpperCase();
console.log(messageResult);


// Question 5
let comment = "JavaScript is awesome";
let commentFind = comment.slice(0, 10);
console.log(commentFind);

commentFind = comment.slice(-7);
console.log(commentFind);

commentFind = comment.slice(11);
console.log(commentFind);


// Question 6
let lang = "I love python";
console.log(lang.replace("python", "JavaScript"));


// Question 7 
let repStr = 'La';
let repeatStr = repStr.repeat(5);
console.log(repeatStr);


// Question 8 
let fruits = ["mango", "apple", "pear", "orange", "banana"];
let fruitsFind = fruits.indexOf("pear");
console.log(fruitsFind);

fruitsFind = fruits.indexOf("sugarcane");
console.log(fruitsFind);



// Question 9 

let books = ["atomic habit", "deep work", "12 months 1 million $", "Work Smarter Not Harder"];
let booksFind = books.includes("atomic habit");
console.log(booksFind);

booksFind = books.includes("deep work");
console.log(booksFind);

booksFind = books.includes("my routine");
console.log(booksFind);



// Question 10 
let pakCricketrs = ["Babar Azam", "Saim Ayub", "Fakhar Zaman"];
let indCricketrs = ["Rohit Sharma", "Virat Koli", "Ms Dhoni"];
let interCricketrs = pakCricketrs.concat(indCricketrs);
console.log(interCricketrs);



// Question 11 
let alphabet = ['a', 'b', 'c', 'd', 'e'];
let revalphabet = alphabet.reverse();
console.log(revalphabet);

// original array (original array will be changes when you used reverse method).
console.log(alphabet);



// Question 12 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersFind = numbers.slice(2, 7);
console.log(numbersFind);

numbersFind = numbers.slice(-4);
console.log(numbersFind);


numbersFind = numbers.slice(5, numbers.length);
console.log(numbersFind);


// Question 13 
let teachers = ["Yousaf","Sarmad","Saqib","Ansar","Khanzada"];
let addTeacher = teachers.push("Arif");
console.log(teachers);

let delTeacher = teachers.pop();
console.log(teachers);

let newTeacher = teachers.unshift("Zubair");
console.log(teachers);

newTeacher = teachers.shift();
console.log(teachers);


// Question 14 
let countries = ["china","pakistan","india"];
console.log(countries);

let newCountries = countries.splice(0 , 0, "USA","UK");
console.log(countries);

newCountries = countries.splice(2, 1);
console.log(countries);

newCountries = countries.splice(1 , 1, "Iran");
console.log(countries);



// Question 15 
let students = ["Akmal","Haris","Maaz","Izaan","Zain"];
console.log(students);

let newStudents = students.splice(2, 2);
console.log(students);

newStudents = students.splice(2, 0, "Kaif", "Mairaj");
console.log(students);

