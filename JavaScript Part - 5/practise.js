// creating objects 

let students = {
    name: "Muhammad",
    age: 22,
    gender: "male",
    marks: 89.99
};

console.log(students);

// create post & get values

let post = {
    username: "@muhammad",
    content: "Informative Content",
    likes: 150,
    repost: 5,
    tags: "@ali, @sami, @osama"
};

console.log(post["likes"]);

// Conversion in Get Values

let classInfo = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

console.log(classInfo[undefined]);

// Add _ Update Values 

let studentInfo = {
    name: "Muhammad Taha",
    course: "Software Engineering",
    age: 22,
    marks: 91.2
};

console.log(studentInfo);
console.log(studentInfo.course = "Artificial Intelligence");
console.log(studentInfo);
studentInfo.gender = "male";
console.log(studentInfo);
console.log(studentInfo.marks = [88, 79, 95]);
console.log(studentInfo);
delete studentInfo.gender;
console.log(studentInfo);
console.log(studentInfo.marks = 91.65);
console.log(studentInfo);


// Nested Objects

let players = {
    Rizwan: {
        player: "batsman",
        score: 63,
        strike: "not out"
    },
    Amir: {
        player: "bowler",
        score: "3 wickets",
        strike: "out"
    },
    Saim: {
        player: "all rounder",
        score: 46,
        strike: "not out"
    }
};

console.log(players);
console.log(players.Amir.strike = "not out");
console.log(players);
console.log(players.Amir.score = 00);
console.log(players);
console.log(players.Saim.player = "bowler");
console.log(players);
players.Amir.gender = "male";
console.log(players);
delete players.Amir.gender;
console.log(players);
players.Shadab = {
    player: "bowloer",
    score: "2 wickets",
    strike: "out"
};
console.log(players);
delete players.Shadab;
console.log(players);


// Array of Objects 

let teams = [
    Pakistan = {
        player: ["Rizwan", "Babar", "Saim"],
        score: 23,
        strike: "not out"
    },

    India = {
        player: ["Dhoni", "Virat", "Rohit"],
        score: 56,
        strike: "not out"
    },

    Afghanistan = {
        player: ["Rashid", "Noor", "Noor"],
        score: 78,
        strike: "out"
    }
];

console.log(teams[0].player);
console.log(teams[2].strike);
console.log(teams[1].player[0] = "Shakar");
console.log(teams[1]);
teams[3] = {
    player: ["Alyster", "Smith", "Zampa"],
    score: 92,
    strike: "not out"
};
console.log(teams)

delete teams[3].player[0];
console.log(teams[3]);
console.log(teams[3].player[0] = "Cook");
console.log(teams[3]);


// Math Object 

// Math.abs 
console.log(Math.abs(-56.88));

// Math.pow 
console.log(Math.pow(2, 6));

// Math.floor 
console.log(Math.floor(8.567));
console.log(Math.floor(-8.567));

// Math.ceil 
console.log(Math.ceil(6.647));
console.log(Math.ceil(-6.647));

// Math.random 
console.log(Math.random());
console.log(Math.random());


// Random Integers

let random = Math.floor(Math.random() * 16 + 35);
console.log(random);


console.log(" Guessing Maximun Number Game:");

// Guessing Maximun Number Game 

let max = prompt("enter a max number");
let randomMax = Math.floor(Math.random() * max + 1);
let guessMax = prompt("guess the max number");

while (true) {
    if (guessMax == "quit") {
        console.log("User quit");
        break;
    }

    else if (guessMax == randomMax) {
        console.log("you are right congrates! the guess number was", randomMax);
        break;
    }

    else if (guessMax < randomMax) {
        guessMax = prompt("hint: your guess was too small please try again");
    }

    else {
        guessMax = prompt("hint: your guess was too large please try again");
    }
}