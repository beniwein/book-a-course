let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let address1 = document.getElementById("address1").value;
let address2 = document.getElementById("address2").value;
let plz = document.getElementById("plz").value;
let city = document.getElementById("city").value;
let email = document.getElementById("email").value;

// alle Felder müssen in Booking ausgefüllt werden:
function validate() {
    if (firstNameValue === "") {
        setErrorFor(firstName, "Dein Vorname fehlt. / Your first name is missing.");
        sessionStorage.setItem("firstName"), document.getElementById("firstName").value;
    } else {
        setSuccessFor(firstName);
    }
    if (lastNameValue === "") {
        setErrorFor(lastName, "Dein Nachname fehlt. / Your last name is missing.");
        sessionStorage.setItem("lastName"), document.getElementById("lastName").value;
    } else {
        setSuccessFor(lastName);
    }
    if (address1Value === "") {
        setErrorFor(address1, "Bitte Adresszeile einfügen / Please enter a street & no.");
        sessionStorage.setItem("address1"), document.getElementById("address1").value;
    } else {
        setSuccessFor(address1);
    }
    if (plzValue === "") {
        setErrorFor(plz, "Bitte PLZ einfügen. / Please enter your ZIP-code.");
        sessionStorage.setItem("plz"), document.getElementById("plz").value;
    } else {
        setSuccessFor(plz);
    }
    if (cityValue === "") {
        setErrorFor(city, "Dein Wohnort fehlt. / Your domicile is missing.");
        sessionStorage.setItem("city"), document.getElementById("city").value;
    } else {
        setSuccessFor(city);
    }
    if (emailValue === "") {
        setErrorFor(email, "Email erforderlich. / Email cannot be blank");
        sessionStorage.setItem("email"), document.getElementById("email").value;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email ungültig. / Invalid Email.");
    } else {
        setSuccessFor(email);
    }

// Variante mit Error-Text & Symbol in shortDesc (unbenutzt):
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = form - Control.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
    }
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    }
    return valid;
}

// Email muss in gültiger Form sein (unbenutzt):
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// PLZ muss zwingend vierstellig sein (unbenutzt):
let x = document.getElementById("plz").value;
let text;
if (isNaN(plz) || x < 4 || x > 4) {
    text = "Ungültig / Invalid";
} else {
    text = "Input OK";
}
document.getElementById("form").innerHTML = text;

// FEHLERMELDUNG für Select & Checkbox: return statement, usage only in function body.
/*
// Kurs muss in Booking ausgewählt werden (Select):
let valSelect = document.getElementById("FormControlSelect1").selectedOptions[0].value;
if (valSelect === "0") {
    alert("Bitte auswählen / Make a Choice");
    return false;
}

// AGB müssen in Booking akzeptiert werden (Checkbox):
let valCheckbox = document.getElementById("agbCheck").checked;
if (!valCheckbox) {
    alert("Bitte bestätigen / Please confirm");
    return false;
}
*/


