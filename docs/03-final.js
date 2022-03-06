// VARIANTE 1) Hat Einfluss auf das HTML. Miteinbezieht die Daten aus 02-booking.html aber nicht.
const firstName = sessionStorage.getItem("firstName");
const lastName = sessionStorage.getItem("lastName");
const address1 = sessionStorage.getItem("address1");
const address2 = sessionStorage.getItem("address2");
const plz = sessionStorage.getItem("plz");
const city = sessionStorage.getItem("city");
const email = sessionStorage.getItem("email");

const FormControlSelect1 = sessionStorage.getItem("FormControlSelect1");

// Personalien - Textblock:
document.getElementById("firstName").innerHTML = `$(firstName)`;
document.getElementById("lastName").innerHTML = `$(lastName)`;
document.getElementById("address1").innerHTML = `$(address1)`;
document.getElementById("address2").innerHTML = `$(address2)`;
document.getElementById("plz").innerHTML = `$(plz)`;
document.getElementById("city").innerHTML = `$(city)`;
document.getElementById("email").innerHTML = `$(email)`;

// Kurswahl:
document.getElementById("FormControlSelect1").innerHTML = `$(FormcControlSelect1)`;


// VARIANTE 2) Getestet / ohne Resultat
/*
function fillIn() {
    // Personalien - Textblock:
    document.getElementById("firstName").innerText = sessionStorage.getItem("firstName");
    document.getElementById("lastName").innerText = sessionStorage.getItem("lastName");
    document.getElementById("address1").innerText = sessionStorage.getItem("address1");
    document.getElementById("address2").innerText = sessionStorage.getItem("address2");
    document.getElementById("plz").innerText = sessionStorage.getItem("plz");
    document.getElementById("city").innerText = sessionStorage.getItem("city");
    document.getElementById("email").innerText = sessionStorage.getItem("email");
    // Kurswahl:
    document.getElementById("FormControlSelect1").innerText = sessionStorage.getItem("FormcontrolSelect1");
}

fillIn();
*/