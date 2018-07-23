

const catsModel = [
    { name: 'Bert', src: 'img/cat.jpg', count: 0 },
    { name: 'Emily', src: 'img/cat2.jpg', count: 0 },
    { name: 'Pumpkin', src: 'img/cat3.jpg', count: 0 },
    { name: 'Herbert', src: 'img/cat4.jpg', count: 0 },
    { name: 'The Twins', src: 'img/cat5.jpg', count: 0 }
]

let currentCat = {};

const menuView = {
    render: function (menu,cat,index) {
        menu[0].innerHTML = menu[0].innerHTML + `<p id ="${index}" class="catz btn btn-info">${cat.name}</p>`;
    }
}


const catView = {
    loadCat: function() {
        const card = document.getElementsByClassName('card');
        card[0].innerHTML = `<div class="counter-container">
	    				    <h3 class="cat-name">${currentCat.name}</h3>
	    				    <h2 id="counter" class="counter">${currentCat.count}</h2>
	    			    </div>
                        <img id="cat" class="cat" src="${currentCat.src}">`;
    }
}

const adminView = {
    renderAdmin: function() { 
        adminForm = document.getElementById("admin-form");
            adminForm.innerHTML =
                `<label>Cat Name</label><br>
                <input id="cat-name" value="${currentCat.name}"><br>
                <label>Cat URL</label><br>
                <input id="cat-src"value ="${currentCat.src}"><br>
                <label>Click Count</label><br>
                <input id="click-count" value="${currentCat.count}"><br>
                <p id="update" class="btn btn-success">Update</p>
                <p id="cancel" class="btn btn-outline-light">Cancel</p>`;
            octopus.updateListener();
    },
    closeAdmin: function(adminForm) {
        adminForm.innerHTML = '';
    }
}

const octopus = {
    createMenu: function() {
        let index = 0;
        const menu = document.getElementsByClassName('menu');
        menu[0].innerHTML = '';
        for (cat of catsModel) {
            menuView.render(menu,cat,index);
            index++;
        }
    },
    createCat: function(cat) {
        currentCat = cat
        catView.loadCat();

        const catImage = document.getElementById('cat');
        const counter = document.getElementById('counter');

        catImage.addEventListener('click', function () {
            cat.count++;
            counter.innerHTML = cat.count;
            const adminForm = document.getElementById("admin-form");
            if (!adminForm.innerHTML) {
                return;
            }
            else { adminView.renderAdmin(); }
        }, false);
    },
    changeCatListener: function() {
        const menuButtons = document.getElementsByClassName('catz');

        for (menuButton of menuButtons) {
            menuButton.addEventListener('click', function () {
                octopus.createCat(catsModel[this.id]);
                adminView.renderAdmin();
            });
        }
    },
    toggleAdmin: function() {
        const adminForm = document.getElementById("admin-form");
        if (!adminForm.innerHTML)  {
            adminView.renderAdmin();
        }
        else { adminView.closeAdmin(adminForm); }
    },
    adminListener: function() {
        const adminButton = document.getElementById('admin-button');

        adminButton.addEventListener('click', function() {
            octopus.toggleAdmin()
        });
    },
    updateListener: function() {
        const update = document.getElementById('update');
        const catName = document.getElementById('cat-name');
        const catURL = document.getElementById('cat-src');
        const clickCount = document.getElementById('click-count');

        update.addEventListener('click', function() {
            currentCat.name = catName.value;
            currentCat.src = catURL.value;
            currentCat.count = parseInt(clickCount.value);
            catView.loadCat();
            octopus.createMenu();
            octopus.changeCatListener();
            octopus.createCat(currentCat);
            octopus.toggleAdmin();
        });

        const cancel = document.getElementById('cancel');

        cancel.addEventListener('click', function() {
            octopus.toggleAdmin();
        });
    },
    init: function() { 
        this.createMenu();
        currentCat = catsModel[0]
        this.createCat(catsModel[0]);
        this.changeCatListener();
        this.adminListener();
    }
}

//Get this party started
octopus.init();