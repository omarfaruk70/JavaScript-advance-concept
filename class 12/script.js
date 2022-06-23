// regular expression means pattern matching technique.
// regular expression literal and meta character
let re;
re = /hello/;
let str;
str = 'Hello world';
console.log(re.exec(str));


function reTest (re,str){
    if(re.test(str)){
        console.log(`"${re.source}" matches with ${str} `)
    }
    else{
        console.log(`${re} doesn't match with ${str}`)
    }
}
reTest(re, str)
// ======== literal character (i) ====== use for case insensetivity.
// ==================== meta charecter ===================
// (^) this is called cat or carrot sign. it means (must started with) + string;
// (sahasjjasksa hello$) here $ sign means this string must end with last word from the $ sign.
// (.) means must have any or any single character .
//(*) means having or nothing any character. thakle o match korbe and na thakleo match korbe.
//(?) means er agee ja ache tai thakte hobe must. otherwise output dibena. wrong bolbe. OPTIONAL