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
