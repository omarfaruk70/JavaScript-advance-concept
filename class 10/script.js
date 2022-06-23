// this is error handling class.
// we can handle any kind of error in javascript by 1. Try and 2. Catch method. lets see the syntex of try and catch method.
// try{

// }catch( ){

// }

console.log('this class is all about error handling in javascript');
//  error handle
try{
    test();
}catch(err){

    // console.log(err);
    console.log(err.message);
    console.log(err.name);
}
console.log('try and catch method can handle an error');



// //  throw error handling
// let a = 30;
// try{
//     if(a>20) throw 'this is too big number';
//     else if (a<20) throw 'this is too small number';
// }catch(err){
//     console.log(err)
// }