console.log("Hello World");
//varable can be declared and assigned value later
var a;
a = 10;
//varable can be declared and assigned value at the same time
let b=20;
//const variable must be assigned value at the time of declaration and cannot be reassigned later
const c=30;
console.log(a);
console.log(b);
console.log(c);

var num=10;
var str = "Thilak";//`` '' " are used to declare string
var bool = true;//boolean can be true or false  
var un;
var nu=null;
var big = 1223445566778888n;//bigint is used to store large integers
var sym = Symbol("sym");//symbol is used to create unique identifiers
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nu);
console.log(typeof big);
console.log(typeof sym);

var arr=[1,2,3,4,5,6,7,8]//array
console.log(typeof arr);

var obj = {
    name:"Thilak",
    dept:"DS"

}
console.log(obj);
console.log(typeof obj);