// Object oriented programming ki ba kake bole.
// object oriented programming er 4 ta important part holo 
// 1.Encapsulation
// 2.Abstraction
// 3.Inheritance
// 4.Polymorphism
// object oriented programming er class jinish ta onk onk important. eta k ekta template bola hoy. 
// object oriented programming e ekta specific class thkei muloto object banano ba toiri hoy.

/*let person1 = {
    firstName: "Omar",
    lastName: "Faruk",
    dob: "7/11/2002",
    fullName: function(){
        return (`This is ${this.firstName} ${this.lastName}`)
    }
};
console.log(person1.fullName())

let person2 = {
    firstName: "Saiful",
    lastName: "Emon",
    dob: "01/01/2001"
};

let person3 = {
    firstName: "Saikat",
    lastName:  "Noman",
    dob   : "10/10/2001",
    fullName: function(){
        return(`This is ${this.firstName} ${this.lastName} is a software developer`)
    }
};
console.log(person3.fullName())
*/
// class method creating
// class PersonalInformation{
//     constructor(){  // constructor holo ekta template or as like building base.
//         this.firstName = "Omar";
//         this.lastName = "Faruk";
//         this.sureName = "Omar Faruk";
//         this.dob = "07/11/2002";
//     }
// }

// == creating class template for adding an dynamic object
class PersonalInformation{
    constructor(){
        this.name = "Omar Faruk";
        this.age = 20;
        this.dob = "07/11/2002";
        this.education = "Diploma in Telecommunication Technology";
    }
}
//  start creating a property.
let person1 = new PersonalInformation();
console.log(person1);


// finally dynamic object oriented programmig done
class StudentData{
    constructor(name,age,dateOfbirth,dept,roll,reg){
        this.name = name;
        this.age = age;
        this.dateOfbirth = dateOfbirth;
        this.dept = dept;
        this.roll = roll;
        this.reg = reg; 
    }
}
let student1 = new StudentData("Minhazur Rahman",20,"01/01/2003","Telecommunication",484287,15020790087);
console.log(student1);


// another practise of dynamic object oriented programming
class Member{
    constructor(name,team,joursey,nickname){
        this.name = name;
        this.team = team;
        this.joursey = joursey;
        this.nickname = nickname;
    }
}
let player1 = new Member("Leonel Messi","Argentina",10,"LM10");
console.log(player1);
let player2 = new Member("Di-maria", "Argentina", 11, "Angel di-maria");
console.log(player2);

// another practise of object oriented programming
class Userinfo{
    constructor(name,age,dob,profession){
        this.name = name,
        this.age = age;
        this.dob = dob;
        this.profession = profession;
    }
}
let profile1 = new Userinfo("Omar Faruk",20,"7/11/2002","Student");
console.log(profile1);
let profile2 = new Userinfo("Nurul Afser Opi", 20, "01/01/2000", )
console.log(profile2)
 // another practice
 class Biography{
    constructor(name, age , dob, bloodgrp,phone){
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.bloodgrp = bloodgrp;
        this.phone = phone;
    }
}
let user1 = new Biography("Faruk",20,"07/11/2002","B+","01881937170")
console.log(user1)
let user2 = new Biography("Rifat",20,"11//05/2003","A+","01613470109");
console.log(user2);
