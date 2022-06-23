// this class is all about oop sub class and inheritance.
// sub class and inheritance.
class Person{
    constructor(fname,lname,dob){
        this.firstName = fname;
        this.lastName = lname;
        this.dob = dob;
    }
    greetings(){
        console.log(`Hello I am  ${this.firstName} ${this.lastName} `)
    }
}
let Person1 = new Person("Omar", "Faruk", "07/11/2002",);
console.log(Person1);
console.log(Person1.greetings);

class Customer extends Person{
    constructor(fname,lname,dob,bg,phone){
        super(fname,lname,dob);  //  this is extends from person class.
        this.blood = bg;
        this.phone = phone;
    }
}

let customer1 = new Customer('Minhazur','Rahman','01/11/2003','B+','0185521623');
console.log(customer1);
//Note. 1ta class er kichu property onno kono class e kaj er subbidhar jonno call kora jabe. 
// firstly Extends keywords diye oi class k dhorte hobe . secondly super() method diye property gula k access korte hobe.




// another practise

// == Base class , sub class and inheritance
// Inheritance mane holo kono ekta base class er property k onno ekta sub class er property r value hisabe access kora. 
class Students{   //Base class
    constructor(fname,lname,nickname,city){
        this.firstName = fname;
        this.lastName = lname;
        this.nickname = nickname;
        this.city =  city;
    }
    hello(){
        console.log(`This is  ${this.firstName} official information`)
    };
};
let students1 = new Students('Arafath','hossen','arafath','feni');
console.log(students1);
console.log(students1.hello());

class RegularStudens extends Students{   //Sub class
    constructor(fname,lname,nickname,city,roll,blood){
        super(fname,lname,nickname,city)  // Inherit from base class (Students).
        this.roll = roll;
        this.blood  = blood;
    }
}
let RegularStudens1 = new RegularStudens('omar','faruk','faruk','feni','484275','B+');
console.log(RegularStudens1);

// this full process is called inheritance.

// another practise (reunion)
class Friends{                     // Base class
    constructor(name,roll,year,phone){
        this.studentname = name;
        this.roll = roll;
        this.passingYear = year;
        this.phone = phone;
    }
    welcome(){
        console.log(`Welcome ${this.studentname} at Bashpodua govt primary school. Enjoy Your day with your friends`)            
    }
};
var student1 = new Friends('Omar Faruk',6,2014,01881937170)
console.log(student1.welcome())
console.log(student1);

class Women extends Friends{         // Sub class
    constructor(name,roll,year,phone,dob,id,payment){
        super(name,roll,year,phone);  // Inheritance.
        this.dob = dob;
        this.studentId = id;
        this.payment = payment;        
    }
    welcome(){
        console.log(`Welcome ! Enjoy Your special day`)
    }
}
let women1 = new Women('Angel Anika',15,2014,01824652584,'01/01/2002',246545,'Bkash');
console.log(women1.welcome())
console.log(women1);