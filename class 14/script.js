// Regular expression.
// Regular expression Quantifier and Grooping.
let re;
// re = /[0-9][0-9]hello/;
re  = /hel{2}o/      //{2} mane holo er ager character l ta string e 2 bar thakte hobe.
re = /hel{2,5}lo/ //this is called range. minimum 2-5.
re  = /hel{2,}o/ // at least 2time to high time as much as can.


// Grooping works with paranthesis ().
//  () = grooping as regular expression time.
re = /([0-9]){5}hello/; etar mane holo hello word tar age 0-9 jeikono digit 5ta/ 5bar thakbe. etake grooping bole.
//bangladeshi phone number chacking by grooping and quantifier.
// re = /^01[0-9]{9}$/;
// re = /^\+8801[0-9]{9}$/

let str;
str = 'hello';
console.log(re.exec(str));
// === Quantifier work with second bracess {  }. 
// { } its called bracess in regular expression.