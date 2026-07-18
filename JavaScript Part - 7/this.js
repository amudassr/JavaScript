// this keyword in JS 

let student = {
    name: "Muhammad",
    marks: 99,
    prop: this,  // global scope
    getName: function () {  // calling object is ka student hai 
        console.log(this);
        return this.name;
    },

    getMarks: () => {   // is ka parent's scope student hai tu is lya is ka this student ka this hoga or object ka khod ka koi this nhi hota
        console.log(this);
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {  // is arrow functiona ka this student obj hai bcz setTimeout ka parent hai getinfo1 or us ka this student hai tu is lya setTimeout ka this student hoga
            console.log(this);
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {  // or is normal function ka this student hai bcz object ka khod ka koi this nhi hota vo global scope hota hai 
            console.log(this);
        }, 2000);
    }
};

// console.log(student.getName());
// console.log(student.getMarks());
// console.log(student.getInfo1());
// console.log(student.getInfo2());


// Example: 1 

let team = {
    name: "warriors",
    getLeader: function () {
        let announce = () => {
            console.log(this.name);
        }
        announce();
    },

    getScore: () => {
        console.log(this.name);
    }
}

console.log(team.getLeader());
console.log(team.getScore());


// Example: 2

let car = {
    brand: "Toyota",
    start: function () {
        console.log("Starting...", this.brand);

        setTimeout(function () {
            console.log("Engine check:", this.brand);
        }, 1000);

        setTimeout(() => {
            console.log("Fuel check:", this.brand);
        }, 1000);
    }
}

console.log(car.start());
