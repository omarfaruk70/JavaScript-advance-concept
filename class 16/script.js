// Regular expression part-06
// Regular expression assertions.

// regular expression
// assertions syntex is x(?=y). this means y ta tokhoni match korbe jokhn y er agee x thakbe
let re;
re = /x(?=y)/;
re = /a(?=bc)/;
re = /x(?!yz)/; // yz er agee x thakle match korbe nah. ! means not equal.
let str;
str = 'fsafsdfxy';
str = 'ksaddfabcdef';
str = 'afggsxyz';

console.log(re.exec(str));
function retest(re,str){
    if(re.test(str)){
        console.log(`'${re}' matches with ${str}`)
    }
    else{
        console.log(`${re} doesn't matches.`)
    }
};
retest(re, str)