console.log('Hello World');

let mainNav = document.querySelector('ul');

let newLi = document.createElement('li');

let newLink = document.createElement('a')

newLink.innerText = '🌴 Holiday';

newLi.appendChild(newLink);

mainNav.append(newLi)

let mainHeader = document.querySelector('h1')

mainHeader.style.fontSize = '20rem'
mainHeader.style.color = 'blue'
mainHeader.style.textDecoration = 'underline'

let secondHeader = document.createElement('h2')

secondHeader.innerText = 'Everything you need to know about the DOM'

mainHeader.after(secondHeader) // after method places items after the node

let allListItems = document.querySelectorAll('li')

for(let item of allListItems){
    item.style.backgroundColor = 'pink'
}

allListItems[0].classList.remove('active')