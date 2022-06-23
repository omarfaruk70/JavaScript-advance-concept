// regular expression 
//Shorthand character and assertions
//  regular expression system is /regular expression/
// shorthand character started with a backword slash(\).



let re;
re = /\w+/; // here w is shorthand charc. word char is alpha numaric or under score. + means mathch with one or more.
// if w is capital(W) its non word character and if w is small its word character. 
re = /\W/; // non word charecter. !$%( etc.
re = /\d+/; // d for digit.
re = /\D/; // capital D for non-digit charecter.
re = /\s+/; // only white space.
let str;
str = '+@#kasrh5645'
str = '+018556543256'
str = "gfsdsfsafsa445"
str = 'amar sonar bangla'
console.log(re.exec(str));



function retest(re,str){
    if(re.test(str)){
        console.log(`'${str} matches with ${re}'`);
    }
    else{
        console.log(`${str} didn't matches with ${re}`);
    }
}
retest(re,str);

