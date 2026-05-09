// Question 1 - For Loop 

// Odd Number 
console.log("Odd Numbers");
for (let e = 1; e <= 20; e += 2) {
    console.log(e);
}


// Even Number 
console.log("Even Numbers");
for (let o = 0; o <= 20; o += 2) {
    console.log(o);
}


// Question 2 - User multiplication table


console.log("User multiplication table");

let n = Number(prompt("write your number"));

for (let user = 1; user <= 10; user++) {
    console.log(`${n} x ${user} = ${n * user}`);
}


// Question 3 - while loop 

console.log("While loops");

let w = 1;
while (w <= 10) {
    console.log(w);
    w++; // agr is w++ ko comment kr dya na tu loop infinite ho jaye ga or browser hang ho jaye ga.
}



// Question 4 - Loops with Arrays 


console.log("Loops with Arrays");

let favMovie = ["Kakul", "Rahbar", "Asghar Khan", "Chirat", "Nsotc"];

for (let f = 0; f < favMovie.length; f++) {
    console.log(f, favMovie[f]);
}

// With while loop 

console.log("fav movie with while loop");

let fMovie = ["Alpha Bravo Charlie", "Ehd-e-Wafa", "Sinf-e-Aahan", "Sunehray Din"];

let fav = 0;

while (fav < fMovie.length) {
    console.log(fav, fMovie[fav]);
    fav++;
}



// Question 5 - Infinite Loop with break

console.log("Infinite Loop with break ")

let wloop = 1;
while (wloop > 0) {
    if (wloop == 8) {
        console.log("Loop is end!")
        break;
    }
    console.log(wloop);
    wloop++;
}

