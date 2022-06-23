// this is all about regular expression
// pattern matching technique
// regular expression call korar system /code block/
// let re;
// re = /Hello! this is regular expression syntex/;
// console.log(re);
// console.log(re.source); //without / in regular expression

// match and missmatch regular expression
// if match the expression returns an array. Otherwise shown the output is Null.
let be;
be =/Hello world/;
// console.log(be);

let de;
de = "Hello world";
// console.log(de)
// matching part

let match = be.exec(de);;
console.log(match);



// match () function 

let a;
a =/Hello world/;
// console.log(be);

let b;
b = "Hello world";
// console.log(de)
// matching part

let result2 = a.test(b);
console.log(result2);
/* exec() returns an array . and match() function returns 
boolean value. */



// match() works with regular expression. its work reverse of exec(). as like
// result = built function.mathch(regular expression)
// i used last of regular expression for case insensativity.

// search() is like exec function. its work with same . just return index number and if false, return the value is -1;

// we can replace anything by replace() function. as like.
// result = str.replace(re, "Hi");