// Object Literals 

const student = {
    name: "Muhammad",
    age: 22,
    marks: 94.4,
    gender: "male"
}

console.log(student);

let product = {
    item: "shirt",
    price: 1500,
    discount: "20%",
    color: ["white", "black"]
};

console.log(product.color.splice(1, 1, "red"));


// practise qs thread post 

let post = {
    username: "@muhammad",
    content: "This is my #first Post",
    like: 15,
    repost: 5,
    tags: ["@ali", "@hamza", "@hasan"]
};

console.log(post.username);
console.log(post.tags);


// Reserved word value get 

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

console.log(obj[undefined]);

// Add & Update value 

const studensData = {
    name: "Muhammad",
    age: 22,
    marks: 95.4,
    city: "karachi"
};

studensData.city = "lahore";
console.log(studensData);
studensData.gender = "male";
console.log(studensData.gender);
console.log(studensData);
studensData.marks = "A";
console.log(studensData.marks);
console.log(studensData);
studensData.marks = [81, 88, 93];
console.log(studensData.marks);
console.log(studensData);
delete studensData.marks;
console.log(studensData);
studensData.marks = [91, 89, 79];
console.log(studensData);


// Nested Objects 

let classInfo = {
    ali: {
        grade: "A+",
        city: "Karachi"
    },

    hassan: {
        grade: "A",
        city: "Islamabad"
    },

    khan: {
        grade: "B",
        city: "Lahore"
    }
};

classInfo.khan.gender = "male";
console.log(classInfo);
classInfo.ali.city = "Quetta";
console.log(classInfo);
classInfo.hassan.gender = "male";
console.log(classInfo.hassan);
delete classInfo.hassan.gender;
console.log(classInfo.hassan);
console.log(classInfo.khan.grade);


// Array of Objects 

let studentInfo = [
    {
        name: "Ayan",
        grade: "A",
        city: "Multan"
    },

    {
        name: "Zain",
        grade: "B",
        city: "Sahiwal"
    },

    {
        name: "Umer",
        grade: "c",
        city: "Pehswar"
    }
];

console.log(studentInfo);
console.log(studentInfo[1].name);
console.log(studentInfo[0].city);
console.log(studentInfo[2].city);

console.log(studentInfo[1].city = "Rawalpindi");
console.log(studentInfo[1]);

console.log(studentInfo[2].gender = "male");
console.log(studentInfo[2]);
delete studentInfo[2].gender;
console.log(studentInfo[2]);



// Math Object 

// Math.abs (absolute)

let math = -5.998;
console.log(Math.abs(math));


// Math.pow (power)

let power = 3;
console.log(Math.pow(4, power));


// Math.floor (floor)

let floor = 5.797;
console.log(Math.floor(floor));


// Math.ceil  (ceiling)

let ceil = 3.5;
console.log(Math.ceil(ceil));

// - Negative value 

let ceilNeg = -3.98;
console.log(Math.ceil(ceilNeg));


// Math.random (random) 

console.log(Math.random());
console.log(Math.random());

console.log("Print Random Integers: 1 to 10");

// Random Integers

// let num = Math.random();
// console.log(num);

// num = num * 10;
// console.log(num);

// num = Math.floor(num);
// console.log(num);

// num = num + 1;
// console.log(num);


// let random = Math.floor(Math.random() * 10 + 1);
// console.log(random);

// let number = Math.floor(Math.random() * 26 + 50);
// console.log(number);

let num = Math.floor(Math.random() * 100 + 1);
console.log(num);



// Guessing Number Game

let max = prompt("enter the max number");

let randomMax = Math.floor(Math.random() * max) + 1;

let guessMax = prompt("guess the max number");

while (true) {
    if (guessMax == "quit") {
        console.log("User quit");
        break;
    }

    if (guessMax == randomMax) {
        console.log("you are right! congrates. random number was", randomMax);
        break;
    }

    else if (guessMax < randomMax) {
        guessMax = prompt("hint: your guess was too small. please try again");
    }

    else {
        guessMax = prompt("hint: your guess was too larger. please try again");
     }

    
}


