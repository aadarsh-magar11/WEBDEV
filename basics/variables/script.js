//variable - a container that stores value

//declaration   let x;
//assignment    x=31;

// let price = 30.25;
// let gpa = 3.60;

// console.log(`your age is ${age}`);
// console.log(`price of the item is $${price}`);
// console.log(`you achieved ${gpa}gpa`);

//to get the datatype, we use (typeof(variable))

//there are many datatypes like number, string, boolean

// let name = "puskar thapa"
// console.log(typeof(name)) //gives string

// let age = 20;
// console.log(typeof(age)); //gives number 

// let availability = true;
// console.log(typeof(availability)); //gives boolean

let name = "aadarsh";
let age = 19;
let enrolled = true;

document.getElementById('p1').textContent=`your name is ${name}`;
document.getElementById('p2').textContent=`you are ${age} years old`;

// operators are the symbols that performs speific operations on operands

//the precedence of the operators are as follows:
/*
1 parenthesis()
2 exponents
3 multiplication & division & module
4 addition & subtraction
*/

//constant - variables whose value arenot changed

const PI = 3.14;
let circumference;
document.getElementById("submitradius").onclick=function(){
    radius=document.getElementById('radius').value;
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent=`the circumference is ${circumference.toFixed(2)}`
}