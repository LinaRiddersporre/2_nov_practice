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

// const ol = document.createElement('ol');
// body.appendChild(ol);

// const li1 = document.createElement('li');
// li1.innerText = 'Skämt 1';
// ol.appendChild(li1);

// const li2 = document.createElement('li');
// li2.innerText = 'Skämt 2';
// ol.appendChild(li2);

// const li3 = document.createElement('li');
// li3.innerText = 'Skämt 3';
// ol.appendChild(li3);

body.style.textAlign = 'center';

//Loops

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 111; i < 134; i++) {
    console.log(i);
}

for(let i = 20; i > 14; i--) {
    console.log(i);
}

//Annan lösning?
for(let i = 50; i > 0; i--) {
    
    console.log(i);
    i = i-4;
}

for(let i = 0.0; i <= 100; i++) {
    
    console.log(i);
    i=i*1.3;
}

const ol = document.createElement('ol');
body.appendChild(ol);


for(let i=0; i < 10; i++){
    const li = document.createElement('li');
    ol.appendChild(li);
     console.log(li);

    li.style.border = 'solid';
    li.style.borderWidth = `${i+1}px`;
    li.style.borderColor = 'black';

    li.style.backgroundColor = `hsl(0, 100%, ${100-(12*i)}%`;

    li.innerText = 'Test';
    li.style.color = `hsl(0, 100%, ${11*i}%`;
}