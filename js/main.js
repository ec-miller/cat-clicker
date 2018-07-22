

const catsModel = [
    { name: 'Bert', src: 'img/cat.jpg', count: 0 },
    { name: 'Emily', src: 'img/cat2.jpg', count: 0 },
    { name: 'Pumpkin', src: 'img/cat3.jpg', count: 0 },
    { name: 'Herbert', src: 'img/cat4.jpg', count: 0 },
    { name: 'The Twins', src: 'img/cat5.jpg', count: 0 }
]

const menuView = {
    render: function (cat,index) {
        const menu = document.getElementsByClassName('menu');
        menu[0].innerHTML = menu[0].innerHTML + `<p id ="${index}" class="btn btn-success">${cat.name}<p>`;
    }
}

const octopus = {
    createMenu: function() {
        let index = 0;
        for (cat of catsModel) {
            menuView.render(cat,index);
            index++;
        }
    },
    createCat: function(cat) {
        catView.loadCat(cat);
    },
    changeCatListener: function() {
        const menuButtons = document.getElementsByClassName('btn');

        for (menuButton of menuButtons) {
            menuButton.addEventListener('click', function () {
                octopus.createCat(catsModel[this.id]);
            });
        }
    },
    init: function() { 
        this.createMenu();
        this.createCat(catsModel[0]);
        this.changeCatListener();
    }
}

const catView = {
    loadCat: function(cat) {
        const card = document.getElementsByClassName('card');
        card[0].innerHTML = `<div class="counter-container">
	    				    <h3 class="cat-name">${cat.name}</h3>
	    				    <h2 id="counter" class="counter">${cat.count}</h2>
	    			    </div>
                        <img id="cat" class="cat" src="${cat.src}">`;
        const catImage = document.getElementById('cat');
        const counter = document.getElementById('counter');

        catImage.addEventListener('click', function () {
            cat.count++;
            counter.innerHTML = cat.count;
        }, false);
    }
}

//Get this party started
octopus.init();