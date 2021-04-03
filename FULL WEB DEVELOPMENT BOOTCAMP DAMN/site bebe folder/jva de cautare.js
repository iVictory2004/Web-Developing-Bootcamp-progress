//functie care cauta chestii pe youtube
function cauta(x) {

    var searchterm = "https://www.youtube.com/results?search_query=" + document.getElementById(x).value;

    post = 'searchterm';
    console.log(searchterm);
}
//SISTEM DE INREGISTRARE CONTURI

let arrayConturi = [];

function register() {
    let nume = document.getElementById('nume').value;
    let parola = document.getElementById('parola').value;
    let parola2 = document.getElementById('parola2').value;

    if (parola == parola2) {
        if (parola.length >= 8) {

            newUser = {
                numecont: nume,
                parolacont: parola,
            }
            arrayConturi.push(newUser);
            alert("Esti inregistrat bro");
            console.log(newUser);

        }
        else { alert('Vezi ca trrrrrrrrrrrrrrrrrrrrr sa fie de peste 8 caractere parola'); }
    }
    else { alert("tre sa ai la fel parolele alea") }
    console.log(arrayConturi);
}


//fa un sistem de logare in conturiile alea da nuj daca poti aici ca gen de fiecare data cand dai refresh la pagina
//pur si simplu doar se sterg toate conturiile deci nuj frate vezi tu

//uite asta e sansa sa faci un BRANCH NOU

function login() {
    let parolalogin = document.getElementById('parolalogin').value;
    let numelogin = document.getElementById('numelogin').value;

    arrayConturi.forEach(newUser => {

        if (parolalogin == newUser.parolacont && numelogin == numecont) { alert("yo teai logat") };

    })


}
