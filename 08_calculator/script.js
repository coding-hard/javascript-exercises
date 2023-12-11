const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.setAttribute('style', 'color: red;');
paragraph.textContent = "Hey I'm red!"
container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.setAttribute('style', 'color: blue;');
header3.textContent = "Hey I'm blue h3!"
container.appendChild(header3);

const divPapa = document.createElement('div');
divPapa.setAttribute('style', 'background: pink; border: black solid 1px;');


const header1 = document.createElement('h1');
header1.textContent = "I'm in a div!"
divPapa.appendChild(header1);

const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!"
divPapa.appendChild(paragraph2);

container.appendChild(divPapa);

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', function (e) {
//     console.log(e);
// });

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('dblclick', () => {
        alert(button.id);
    });
});