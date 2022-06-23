// add and replace element part 02;


// remove 
let listItem = document.querySelectorAll('li');
listItem[2].remove();
console.log(listItem);

// remove element from a parent element.
let olList = document.querySelector('ol');
let olListItem = document.querySelectorAll('li');
olList.removeChild(olListItem[4]);
// olList.classList.add('test');
// olList.classList.remove('old-class');
// olList.setAttribute('title','this is another title');