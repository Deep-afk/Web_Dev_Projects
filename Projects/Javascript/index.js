// console.log('Hello world');

// //bug 1
// console.log(10+"20");
// console.log(10-"5");

// //bug 2 object in not a datatype
// var a=null;
// console.log(a);
// console.log(typeof(a));

// var b;
// console.log(b);
// console.log(typeof(b));

//Nan is a property of the global object. In other words, it is a variable in global scope. The initial value of NaN is Not-A-Number
//isNaN to check if var is num or not.

// console.log(a != b);

//anonymous function
// var type= function(a,b){
//     return a+b;
// }

// console.log(type(10,20));

// function sum(c,d){// here sum is function variable
//     return c+d;
// }

// var sos=sum(10,30);
// console.log("Ans is: " + sos);

//LET VS CONST VS VAR
//var - fxn scope
//let and const - block scope

//let is like variable in cpp

//template literals
//console.log(tableof + "*" + num + "=");
//console.log(` ${tableof} * ${num} =`);

//fat arrow function
//function declaration should be used first before calling
//const sum = () => {
//     let a=0;
//     return a;
// }
//console.log(sum());

//for single line code
//const sum = () => `this is running`;

//array 
//var arr=[52,true,"djdjd"];
//arr.length //length is property