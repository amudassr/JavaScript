
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