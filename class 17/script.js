// regular expression last part.
// Regular expression and its Some example.

// postal code example. postal code - 4digit.
let re;
re = /^[0-9]{4}$/   // here {} is called quantifier. 
// phone number format are 3types. and they are. 01881937170, +8801881937170, 8801881937170;
// phone number example. formate 1
re = /^01[0-9]{9}$/;
// phone number example. formate 2. 
re = /^\+8801[0-9]{9}$/;
// phone number example . formate 3. as a optional of (+8801)
re = /(\+88)?01[0-9]{9}$/;


// email address validation. farukfci70@gmail.com
// re = /^([a-zA-Z0-9])+ ^@/
let str;
str = '45644'
str = '01881937170';
str = '+8801881937170';
str = '01830104963'

// str = 'farukfci70@gmail.com'

console.log(re.exec(str))
function retest(re,str){
    if(re.test(str)){
        console.log(`'${re}' matches with ${str}`);
    }
    else{
        console.log(`'${re}' doesn't matches.`);
    }

}
retest(re,str)









// note : ? sign means its a optional subjects.
// ^ is called carrot sign. 