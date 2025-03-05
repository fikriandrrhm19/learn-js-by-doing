/*

Task #1

*/

function printSeparator(length = 70, char = "=") {
    console.log("\n" + char.repeat(length) + "\n");
}

printSeparator();

// 1. Calculate the area of a rectangle 
let len = 5;
let wid = 3;
let area_rectangle = len * wid;

console.log("Area of Rectangle: ↴");
console.log(`Length: ${len}, Width: ${wid} → Area = ${area_rectangle}`);

printSeparator();

// 2. Calculate diameter, circumference, and area of a circle
let r = 5;
let d = 2 * r;
let pi = 3.14159265358979323846
let circumference = pi * d;
let area_circle = pi * r * r;
let area_circle_fixed = Math.floor(area_circle * 1000) / 1000;

console.log("Circle Properties: ↴");
console.log(`Radius: ${r} → Diameter: ${d}, Circumference: ${circumference.toFixed(4)}, Area: ${area_circle_fixed}`);

printSeparator();

// 3. Find the third angle of a triangle given two angles
let e, f, g;
e = 80;
f = 65;
g = 180 - (e + f);

console.log(`Given angles: a = ${e}°, b = ${f}° → The third angle is: ${g}°`);

printSeparator();

// 4. Calculate the difference between two dates in days
let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");

let Difference_In_Time = date2.getTime() - date1.getTime();
let Difference_In_Days = Math.round (Difference_In_Time / (1000 * 3600 * 24));

console.log(`Days difference between ${date1.toDateString()} and ${date2.toDateString()} → ${Difference_In_Days} days`);

printSeparator();

// 5. Display initials in uppercase
const s1 = "John Doe";
const s2 = s1.charAt(0)+s1.charAt(5);
const n1 = "fikri Andra irham";
const n2 = n1.charAt(0).toUpperCase() + n1.charAt(6) + n1.charAt(12).toUpperCase();

console.log(`Initials of John Doe: ${s2}`);
console.log(`Initials of Fikri Andra Irham: ${n2}`);
