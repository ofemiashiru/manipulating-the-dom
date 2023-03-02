console.log('Hello World');

let mainNav = document.querySelector('ul');

let newLi = document.createElement('li');

let newLink = document.createElement('a')

newLink.innerText = '🌴 Holiday';

newLi.appendChild(newLink);

mainNav.append(newLi)