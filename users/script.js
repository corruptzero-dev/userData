function addValue(){
    let userName = document.getElementById('userName');
    let userAge = document.getElementById('userAge');
    let userFilm = document.getElementById('userFilm');
    let userTable = document.getElementById('userTable');

    let sortNameBtn = document.getElementById('sortName');
    let sortAgeBtn = document.getElementById('sortAge');
    let sortFilmBtn = document.getElementById('sortFilm');

    let stroka = userTable.insertRow();

    var nameCell = stroka.insertCell(0);
    var ageCell = stroka.insertCell(1);
    var filmCell = stroka.insertCell(2);
    
    nameCell.innerHTML = userName.value;
    ageCell.innerHTML = userAge.value;
    filmCell.innerHTML = userFilm.value;

    userTable.style="visibility:visible"

    sortNameBtn.style="visibility:visible"
    sortAgeBtn.style="visibility:visible"
    sortFilmBtn.style="visibility:visible"
    
    userName.value = '';
    userAge.value = '';
    userFilm.value = '';
    
}
function sortName(){
    let userTable = document.getElementById('userTable');

    let sortedRows = Array.from(userTable.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
    userTable.tBodies[0].append(...sortedRows);

}

function sortAge(){
    let userTable = document.getElementById('userTable');

    let sortedRows = Array.from(userTable.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
    userTable.tBodies[0].append(...sortedRows);

}

function sortFilm(){
    let userTable = document.getElementById('userTable');

    let sortedRows = Array.from(userTable.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[2].innerHTML > rowB.cells[2].innerHTML ? 1 : -1);
    userTable.tBodies[0].append(...sortedRows);

}

