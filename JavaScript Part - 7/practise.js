// Practise Qs 1 

let arr = [2, 12, 22, 28, 32, 39];

let arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number
    }

    return total / arr.length;
}

console.log(arrayAverage(arr));


// Practise Qs : 2 


let even = (n) => {
    if (n % 2 == 0) {
        return ("even");
    } else {
        return ("odd");
    };
};

console.log(even(5));


// this keyword with normal function & arrow function 

//  Example 1: Basic normal function

let obj = {
    name: "Ali",
    show: function () {
        return (this.name);
    }
}

console.log(obj.show());



let user1 = {
    name : "sara",
    greet : greet
};

let user2  = {
    name  : "zara",
    greet : greet
}; 


function greet(){
    console.log(this.name);
}

user1.greet();
user2.greet();