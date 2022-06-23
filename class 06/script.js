// add replace and remove element in javascript 
// creatElement
// var listItem = document.createElement("li");
// listItem.appendChild(document.createTextNode("InstaGRam"));
// document.querySelector("ul").appendChild(listItem);
// console.log(listItem);
// //============= another input programming language =====
// var newLang = document.creatElement('li');
// newLang.appendChild(document.createTextNode('Ruby'));
// document.querySelector('ul').appendChild(newLang);
// console.log(newLang);
// listItem.className = "another class by js";
// listItem.id = "its a new id from js"
// listItem.setAttribute = ("href", "http://www.facebook.com")
// listItem.setAttribute = ("title","creating an element by javascript");
let creatLi = document.createElement('li');
let social = document.createElement('a');
social.setAttribute('href','https://www.twitter.com');
social.appendChild(document.createTextNode("Twitter"));
creatLi.appendChild(social);
// console.log(creatLi);
document.querySelector('ol').appendChild(creatLi);

//  ===== Replace an element ======
let newHeading = document.createElement('h4');
newHeading.appendChild(document.createTextNode('This class is all about add, replace element in javascript'));
// newHeading.className = 'simple class';
console.log(newHeading);
// ====== old heading(h1) k dhorar process =======
let oldHeading = document.querySelector('h1');
console.log(oldHeading);
let parentDiv = document.querySelector('.container');
console.log(parentDiv);
parentDiv.replaceChild(newHeading,oldHeading);

// console.log(oldValue,newLang,parentDiv)
// ekta replace element korte hole first e old value dhorte hobe. then new value creat korte hobe.
// then oldvalue r parentDiv k dhorte hobe . and then. parentDiv.replaceChild(newItem,oldItem);
// inshort 1. Old 2. New. 3. ParentDiv.replaceChild(new,old);