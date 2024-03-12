//Testing out webpack initial setup of index.js
console.log('testing index.js webpack');

//Testing out DOM manipulation via webpack
const contentDiv = document.querySelector('.content');
const testH1 = document.createElement('h1');
testH1.textContent = 'Hello World.. test from webpack index.js dom manipulation'
contentDiv.appendChild(testH1);

