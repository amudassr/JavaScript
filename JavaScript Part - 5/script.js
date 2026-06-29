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
    username : "@muhammad",
    content : "This is my #first Post",
    like : 15,
    repost : 5,
    tags : ["@ali","@hamza","@hasan"]
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
    name : "Muhammad",
    age : 22,
    marks : 95.4,
    city : "karachi"
};  

studensData.city = "lahore";
console.log(studensData);
studensData.gender = "male";
console.log(studensData.gender);
console.log(studensData);
studensData.marks = "A";
console.log(studensData.marks);
console.log(studensData);
studensData.marks = [81,88,93];
console.log(studensData.marks);
console.log(studensData);
delete studensData.marks;
console.log(studensData);
studensData.marks = [91,89,79];
console.log(studensData);