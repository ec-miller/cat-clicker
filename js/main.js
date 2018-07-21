

const cats = [
    { name: 'Bert', src: 'img/cat.jpg' },
    { name: 'Emily', src: 'img/cat2.jpg' },
    { name: 'Pumpkin', src: 'img/cat3.jpg' },
    { name: 'Herbert', src: 'img/cat4.jpg' },
    { name: 'The Twins', src: 'img/cat5.jpg' }
]

function createMenu() {
    const menu = document.getElementsByClassName('menu');
    let index = 0
    for (cat of cats) {
        menu[0].innerHTML = menu[0].innerHTML + `<p id ="${index}" class="btn btn-success">${cat.name}<p>`;
        index++
    }
}

createMenu();

let count = 0;

function loadCat(id) {
    const card = document.getElementsByClassName('card');
    card[0].innerHTML = `<div class="counter-container">
					    <h3 class="cat-name">${cats[id].name}</h3>
					    <h2 id="counter" class="counter">0</h2>
				    </div>
                    <img id="cat" class="cat" src="${cats[id].src}">`;
    count = 0;
    const catImage = document.getElementById('cat');
    const counter = document.getElementById('counter');

    catImage.addEventListener('click', function () {
        count++;
        counter.innerHTML = count;
    }, false);
}

loadCat(0);




const menuButtons = document.getElementsByClassName('btn');

for (menuButton of menuButtons) {
    menuButton.addEventListener('click', function() {
        loadCat(this.id);
    });
}

