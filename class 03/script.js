// static function
// static function javascript er object er sathe kaj kore nah. static function kaj kore class template er sathe.
class Student{
    constructor(name,age,height,weight,dob){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.dateOfbirth =  dob;
    }
    greetings(){
        console.log(`This is ${this.name} personal information`);
    }
    static hello(){
        console.log(`Hello EveryOne! Today I finished my javascript OOp module from amarskil.com`)
    }
}
let result = new Student('Omar Faruk',20, '5 feet 5 inch', '50kg','07/11/2002')
console.log(result.greetings());
console.log(result);
//static function calling
// console.log(result.hello());  // the output is not shown.
console.log(Student.hello()); // output is shown.