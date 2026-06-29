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
console.log(post.tags[1]);