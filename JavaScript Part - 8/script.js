// Array Methods 
// forEach 

let array = [1, 2, 3, 4, 5];

// let print = function print(element){
//     console.log(element);
// }

// array.forEach(print);


// array.forEach(function(element){
//     console.log(element);
// });


array.forEach(element => {
    console.log(element);
});


// Example: 1 

let studentData = [{
    name: "Hassan",
    marks: 91
},
{
    name: "Shoaib",
    marks: 87.5
},
{
    name: "Sami",
    marks: 94.2
}];

studentData.forEach((student) => {
    console.log(student.marks);
});


// Example: 2

let products = [
    {
        title: "Laptop",
        price: 85000
    },

    {
        title: "Mouse",
        price: 13000
    },

    {
        title: "Keyboard",
        price: 21000
    }
];

products.forEach(function (product) {
    console.log(`${product.title} costs Rs. ${product.price}`)
});


// Example: 3

let numbers = [4, 9, 15, 22, 30, 7];
numbers.forEach(function (num) {
    if (num % 2 == 0) {
        console.log(num);
    };
});