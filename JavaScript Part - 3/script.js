
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
let newResultCap =result.toUpperCase();
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
let Position = (position.replace("Designer"),("Developer"));
console.log(Position);

let post = "Junior Soft Engineer";
post =(post.replace("Junior"),("Senior"));
console.log(post +" Soft Engineer");


let bloodGroup = "B ve+";
bloodGroup = bloodGroup.replace(("B ve+"), ("O ve-"));
console.log("Your blood group is " + bloodGroup);


// Repeat Method 

let fruit = "Mango";
fruit = fruit.repeat(3);
console.log("Fruit is repeated 3 times: "+ fruit);


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
schoolName =schoolName.slice((6), (schoolName.length));
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
let fullName = lastName.replace(("Mudassir"),("Muhammad"));
console.log("This is "+ fullName);

// Practise Qs: 3

let center = "MyCollege";
center = center.slice((2));
console.log(center);

center = center.replace(("ll"), ("tt"));
console.log(center);



// Arrays

// Same type of array 
let numArray = [2,4,6,8];
console.log(numArray);

let studentArray = ["sabir","hamza","hassan","ali"];
console.log(studentArray[1]);


// Different type of array 
let info = ["Muhammad", 22 , 71.34];
console.log(info[0]);


console.log(info[0][0]);
console.log(info[0].length)

// Empty Array 
let emptArray = [];
console.log(emptArray);



// Mutable Array 


// String are inmutable 
let strName = "Hamid"
console.log(strName)

strName[2] = "J";
console.log(strName[2]);
console.log(strName);


// Array are mutable 

let fruits = ["apple","mango","pear"];
console.log(fruits);

fruits[6] = "banana";
console.log(fruits)


// Array Methods 

let cars = ["audi","bmw","suzuki","toyota"];
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

