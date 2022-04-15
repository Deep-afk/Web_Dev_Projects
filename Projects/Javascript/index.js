console.log('Hello world');

//bug 1
console.log(10+"20");
console.log(10-"5");

//bug 2 object in not a datatype
var a=null;
console.log(a);
console.log(typeof(a));

var b;
console.log(b);
console.log(typeof(b));

//Nan is a property of the global object. In other words, it is a variable in global scope. The initial value of NaN is Not-A-Number
//isNaN to check if var is num or not.

// console.log(a != b);