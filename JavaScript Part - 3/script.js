
// Methods with Arguments - indexOf 

let myMssg = "ILoveCoading";
let myResult = myMssg.indexOf("v");
console.log(myResult);


// Method Chaining 

let message = "    hello   ";
console.log(message)

let newMessage = message.trim();
console.log("after trim : ", newMessage);

newMessageCap = message.toUpperCase();
console.log("after uppercase : ", newMessageCap);


// print pass 
let result = "  pass    ";
console.log(result);


// print pass with trim 
let newResult = result.trim();
console.log(newResult);


// print pass with toUpperCase 
let newResultCap = result.toUpperCase();
console.log(newResultCap);


// print pass with trim & toUpperCase 
let finalResult = result.trim().toUpperCase();
console.log(finalResult);



// Slice Method 

// 1st Method  (Starting + Ending Index)
let name = "Ali Hamza";
console.log(name.slice(0, 4));

// 2nd Method (Only Starting Index)
let fName = "Gul Hassan";
console.log(fName.slice(4, fName.length));

// 3rd Method (Negative Value)
let stuId = "bc2404";
console.log(stuId.slice(-6));


// Replace Method 

let position = "Web Designer";
let Position = (position.replace("Designer"), ("Developer"));
console.log(Position);

let post = "Junior Soft Engineer";
post = (post.replace("Junior"), ("Senior"));
console.log(post + " Soft Engineer");


let bloodGroup = "B ve+";
bloodGroup = bloodGroup.replace(("B ve+"), ("O ve-"));
console.log("Your blood group is " + bloodGroup);


// Repeat Method 

let fruit = "Mango";
fruit = fruit.repeat(3);
console.log("Fruit is repeated 3 times: " + fruit);


let color = "Black";
let newColor = color.repeat(5);
console.log("Color is repeat 5 times " + newColor);



// Practise Qs: 1

let msg = "help!";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

// Practise Qs: 2

// Slice Method

let schoolName = "Bahria Model School";
schoolName = schoolName.slice((6), (schoolName.length));
console.log(schoolName)

let collegeName = "Bahria College";
collegeName = collegeName.slice((6), (14));
console.log(collegeName);

let uniName = "Virtual University";
uniName = uniName.slice((-3));
console.log(uniName);

// IndexOf Method

let firstName = "Muhammad";
firstName = firstName.indexOf("h");
console.log(firstName);

// Replace Method 

let lastName = "Mudassir";
let fullName = lastName.replace(("Mudassir"), ("Muhammad"));
console.log("This is " + fullName);

// Practise Qs: 3

let center = "MyCollege";
center = center.slice((2));
console.log(center);

center = center.replace(("ll"), ("tt"));
console.log(center);



// Arrays

// Same type of array 
let numArray = [2, 4, 6, 8];
console.log(numArray);

let studentArray = ["sabir", "hamza", "hassan", "ali"];
console.log(studentArray[1]);


// Different type of array 
let info = ["Muhammad", 22, 71.34];
console.log(info[0]);


console.log(info[0][0]);
console.log(info[0].length)

// Empty Array 
let emptArray = [];
console.log(emptArray);



// Mutable Array 


// String are immutable 
let strName = "Hamid"
console.log(strName)

strName[2] = "J";
console.log(strName[2]);
console.log(strName);


// Array are mutable 

let fruits = ["apple", "mango", "pear"];
console.log(fruits);

fruits[6] = "banana";
console.log(fruits)


// Array Methods 

let cars = ["audi", "bmw", "suzuki", "toyota"];
console.log(cars);

// Push: add to end 

cars.push("Lexus");
console.log(cars);

// Pop: delete from end & returns it 

let delCars = cars.pop();
console.log(delCars);
console.log(cars)


// UnShift: add to start 

cars.unshift("Mercedes");
console.log(cars);

// Shift: delete from start & return it 

let removeCars = cars.shift();
console.log(removeCars);
console.log(cars);


// Practise Qs 

let months = ["january", "july", "march", "august"];
console.log(months)

// remove january 
months.shift();
console.log(months)

// remove july 
months.shift();
console.log(months)

// add june
months.unshift("june");
console.log(months)

// add july 
months.unshift("july");
console.log(months);


// indexOf & include methods 

// indexOf Method 
let findMonths = months.indexOf("june");
console.log(findMonths);

findMonths = months.indexOf("august");
console.log(findMonths);


// include Method 

let newMonths = months.includes("march");
console.log(newMonths);

newMonths = months.includes("jan");
console.log(newMonths);


// Concatenation Array

let primary = ["red", "green", "blue"];
let secondary = ["black", "white", "violet"];

let allColors = primary.concat(secondary);
console.log(allColors);


// Reverse Array 

let revPrimary = primary.reverse();
console.log(revPrimary);

let revSecondary = secondary.reverse();
console.log(revSecondary);



// Slice in Array 

let days = ["monday", "tuesday", "wednesday", "thursday", "friday"]
console.log(days.slice());
console.log(days.slice(2));
console.log(days.slice(2, 3))
console.log(days.slice(2, 4));
console.log(days.slice(-2));


// Splice in Array 

let season = ["summer", "winter", "autumn", "spring"];
console.log(season.splice(3));
console.log(season);
console.log(season.splice(0, 1));
console.log(season);
season.push("black", "gray");
console.log(season);
season.pop();
console.log(season);
season.pop();
console.log(season);
season.unshift("pink");
console.log(season)
season.shift();
console.log(season);
season.push("orange", "pink", "gray");
console.log(season);
season.splice(1, 2);
console.log(season)
season.splice(5, 5, "autumn", "orange");
console.log(season);
season.splice(1, 0, "white");
console.log(season);
season.splice(1, 1, "Off White");
console.log(season)
season.splice(4);
console.log(season);
season.splice(0, 2);
console.log(season)







// Methods with Arguments - indexOf 

let oldMssg = "hello world!";
let updateMssg = oldMssg.indexOf('o');
console.log(updateMssg);

// Trim Method

let oldText = "      Hello!  ";
let newText = oldText.trim();
console.log(newText);


// ToUpperCase  

let studentId = "mudassir141";
console.log(studentId)
let uniId = studentId.toUpperCase();
console.log(uniId);


// ToLowerCase

let studentRollNo = "MUDASSIR141";
console.log(studentRollNo)
let uniRollNo = studentRollNo.toLowerCase();
console.log(uniRollNo);


// Method Channing 

let empName = "  Hamza Ali     ";
console.log(empName);
let employee = empName.trim().toUpperCase();
console.log(employee);


// Slice Method 

// 1st Method 

let jobIntern = "Web Developer";
let jobPosition = jobIntern.slice((0), (8));
console.log(jobPosition);


// 2nd Method 

jobIntern = "web Developer";
jobPosition = jobIntern.slice((2), (jobIntern.length));
console.log(jobPosition);


// 3rd Method  

jobIntern = "web Developer";
jobPosition = jobIntern.slice(-4);
console.log(jobPosition);



// slice 1st method example 

let hellomsg = "hello!"
let helloreply = hellomsg.slice(2);
console.log(helloreply);


// Trim 

let stuName = "    Muhammad Ibrahim   ";
let newStuName = stuName.trim();
console.log(newStuName);


// toUpperCase 

let uperName = "Muhammad Ibrahim";
let newUperName = uperName.toUpperCase();
console.log(newUperName);


// toLowerCase 

let lowNmae = "MUHAMMAD";
let newLowName = lowNmae.toLowerCase();
console.log(newLowName);

// indexOf

let indName = "Muhammad";
let newIndName = indName.indexOf('a');
console.log(newIndName);

// replace

let repName = "Muhammad"
let newRepName = repName.replace("Muhammad", "Mudassir");
console.log(newRepName);

// repeat 

let repFruit = "Mango";
let newRepFruit = repFruit.repeat(5);
console.log(newRepFruit);


// Slice Example 

let myName = "Mudassir";
let newName = myName.slice(3, myName.length);
console.log(newName);

// Replace Example 

let mySec = "section A";
let updatedSec = mySec.replace("section A", "section B");
console.log(updatedSec);

// Repeat Example 

let shoes = "NikeShoes";
let myShoes = shoes.repeat(5);
console.log(myShoes);


// Concat Example 

let concate = [1, 2].concat([3, 4, 5]);
console.log(concate);


// Splice Example 

let arr = [10, 20, 30, 40];
arr.splice(1, 2);
console.log(arr);

let newArr = [10, 20, 30, 40];
newArr.splice(3, 0, 4);
console.log(newArr);


// Array Examples 

// Same type array 
let sameArray = [1, 2, 3, 4, 5];
console.log(sameArray);


let stringArray = ["ali", "hasan", "amjad", "yahya", "osama"];
console.log(stringArray);


// Different type array 
let diffArray = ["Muhammad", 23, "B ve+"];
console.log(diffArray);


// Empty Array 
let empArray = [];
console.log(empArray);


// Mutable Array 

let weekDays = ["saturday", "sunady", "monday", "tuesday", "wednesday", "thursday", "friday"];
weekDays[2] = "Holiday";
weekDays[5] = "Mazdoor day";
console.log(weekDays);


// push() 
let degree = ["computer sci", "software eng", "electrical eng", "maritime science"];
degree.push("computer eng");
degree.push("information tech");
console.log(degree);

// pop 
degree.pop();
console.log(degree)
degree.pop();
console.log(degree);


// unshift 
degree.unshift("bs english");
console.log(degree);
degree.unshift("bs math");
console.log(degree);


// shift 
degree.shift();
console.log(degree);
degree.shift();
console.log(degree);


// indexOf

let newDegree = degree.indexOf("maritime science");
console.log(newDegree);


// includes() 

let bsDegree = degree.includes("software eng");
console.log(bsDegree)

bsDegree = degree.includes("bs english");
console.log(bsDegree);


// reverse()

bsDegree = degree.reverse();
console.log(bsDegree);


// slice() 

let string = ["string", "integer", "boolean", "numbers"];
let updateString = string.slice(1);
console.log(updateString);

updateString = string.slice(0, 2);
console.log(updateString);

updateString = string.slice(3, string.length);
console.log(updateString);

updateString = string.slice(-2);
console.log(updateString);


// concat 

let conStr = ["Sanaullah", "Hamza"];
let newConStr = ["Abdullah", "Umer"];
let finalConStr = conStr.concat(newConStr);
console.log(finalConStr);


// splice 

let splArr = ["sami", "hamza", "danial", "adeel"];
let updateSplArr = splArr.splice(1, 0, "Mudassir");
console.log(splArr);

updateSplArr = splArr.splice(0, 1);
console.log(splArr)

updateSplArr = splArr.splice(1, 1);
console.log(splArr);

updateSplArr = splArr.splice(1, 1, "Muhammad");
console.log(splArr);

updateSplArr = splArr.splice(0, 1, "Sami")
console.log(splArr)

updateSplArr = splArr.splice(0, 0, "Muzammil")
console.log(splArr);

updateSplArr = splArr.splice(1, 1)
console.log(splArr);

updateSplArr = splArr.splice(1, 2, "Aqeel");
console.log(splArr);

updateSplArr = splArr.splice(2, 0, "Hamza");
console.log(splArr);

updateSplArr = splArr.splice(1, 1);
console.log(splArr);

updateSplArr = splArr.splice(0, 1, "Omer")
console.log(splArr);



// Practise Qs - Array Methods 

// Question 1
let favSubj = ["maths", "isl", "urdu"];
favSubj.push("eng", "comp");
console.log(favSubj);

// Question 2
let counArray = ["Pak", "Afg", "Ind", "Usa", "China"];
let removeCoun = counArray.pop();
console.log(removeCoun);
console.log(counArray);


// Question 3 
let frnds = ["Muzammil", "Mudassir", "Ibrahim", "Adeel"];
let removFrnd = frnds.shift();
console.log(removFrnd);
console.log(frnds);


// Question 4
let city = ["karachi", "lahore"];
console.log(city)
city.unshift("islamabad", "quetta");
console.log(city);


// Question 5 
let vege = ["potato", "onion", "tomato", "ladyfinger"];
let tomatoVege = vege.indexOf("tomato");
console.log(tomatoVege);
let noVege = vege.indexOf("carrot");
console.log(noVege);


// Question 6 
let dailyRoutine = ["Fajar", "Zohar", "Asar", "Maghrib", "Esha"];
let dailyRout = dailyRoutine.includes("Fajar");
console.log(dailyRout);
let noDailyRout = dailyRoutine.includes("tahajud");
console.log(noDailyRout);


// Question 7

let origArr = [1, 2, 3, 4, 5, 6];
let numArr = origArr.reverse();
console.log(numArr);
console.log(origArr);


// Question 8 
let colorsArr = ["black", "white", "pink", "green", "orange", "blue", "yellow"];
console.log(colorsArr.slice(2, 5));

let colorsArrLast = colorsArr.slice(-3);
console.log(colorsArrLast);

let ColorsArr4 = colorsArr.slice(4);
console.log(ColorsArr4);


// Question 9
let players = ["Babar", "Rizwan", "Fakhar", "Shadab", "Shaheen"];
console.log(players)

let newPlayers = players.splice(0, 0, "Saim");
console.log(players);

let delPlayers = players.splice(5, 1);
console.log(players);

let repPlayers = players.splice(2, 1, "Shoaib");
console.log(players);



// Question 10 

let pakCities = ["karachi", "lahore", "islamabad"];
let pakDishes = ["biryani", "qorma", "karahi"];
let pakCityDish = pakCities.concat(pakDishes);
console.log(pakCityDish);


// Question 11 

let worldCities = ["Paris", "New York", "London"];
let worldPlaces = ["Eiffel Tower", "Statue of Liberty", "British Museum"];
let worldCitiesPlaces = worldCities.concat(worldPlaces);
console.log(worldCitiesPlaces);


// Practise Qs 

let monthsArr = ["january", "july", "march", "august"];
monthsArr.splice(0, 2, "july", "june");
console.log(monthsArr);


// Practise Qs 

let lang = ['C', 'C++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(lang);
let jslang = lang.reverse();
console.log(jslang);
let injslang = jslang.indexOf("javascript");
console.log(injslang)

let skillLang = ['C', 'C++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
let jsSkillLang = skillLang.reverse().indexOf("html");
console.log(jsSkillLang);



// Array Refrences 

let refArr = ['a', 'b', 'c', 'd'];
let arrCopy = refArr;

refArr.push('e');
console.log(arrCopy);

arrCopy.pop();
console.log(refArr);

arrCopy = ['h', 'i', 'j', 'k'];
console.log(arrCopy);



// Const Array 

const g = 10;
console.log(g);

const siblingName = ["Hamza","Sana"];
console.log(siblingName);

siblingName.push("Mohid", "Maryam");
console.log(siblingName);

siblingName = ["osama"];
console.log(siblingName)


