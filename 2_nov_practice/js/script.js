const h1 = document.createElement('h1');
const body = document.querySelector('body');
body.appendChild(h1);

h1.innerText = 'test';

h1.style.backgroundColor = 'red';
h1.style.color = 'lightgreen';

h1.style.border = 'solid';
h1.style.borderWidth = '4px';
h1.style.borderColor = 'blue';

const p = document.createElement('p');
body.appendChild(p);
p.innerText = 'Skapa ett nytt p-element och lägg till det i bodyn. Ge elementet text-innehåll. ';

const ol = document.createElement('ol');
body.appendChild(ol);

const li1 = document.createElement('li');
li1.innerText = 'Skämt 1';
ol.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Skämt 2';
ol.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Skämt 3';
ol.appendChild(li3);

body.style.textAlign = 'center';

//Loops