//typeconversion means converting datatype of one variable to another 
//it is done by just assigning the datatype before the variable

let x = '0'; //it is string here
let y = 'pizza'; 
let z = 'burger';

//type conversion
x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

// age = prompt("enter the your age:")
// console.log(typeof age)//age is string here
//now
age = parseInt(prompt("enter your age:"))
console.log(typeof age)//now it is number as we converted its type
