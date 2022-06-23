// regular expression part 03;
// character set using brackets.  [  ];
let re;
re = /h[ea]llo/;  // [] er vitor thaka jeikono ekta value match holei hobe.
re = /[a-c]ello/
re = /[A-Za-z]ellow/ // we can set a range 
re = /[0-9]ello/
let str;
str = 'hello';
console.log(re.exec(str));