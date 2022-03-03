/* alle Konstanzen definiert:
const form = document.getElementById("form").value;
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const address01 = document.getElementById("address1").value;
const plz = document.getElementById("plz").value;
const city = document.getElementById("city").value;
const agbCheck = document.getElementById("agbCheck").value;
*/

/*form.addEventListener("submit", e => {
    e.preventDefault(); 

    validateInputs();
});*/

// alle Felder müssen in Booking ausgefüllt werden:
function validate() {
    if (firstNameValue === "") {
        setErrorFor(firstName, "Dein Vorname fehlt. / Your first name is missing.");
    } else {
        setSuccessFor(firstName);
    }
    if (lastNameValue === "") {
        setErrorFor(lastName, "Dein Nachname fehlt. / Your last name is missing.");
    } else {
        setSuccessFor(lastName);
    }
    if (address1Value === "") {
        setErrorFor(address01, "Bitte Adresszeile einfügen / Please enter a street & no.");
    } else {
        setSuccessFor(address01);
    }
    if (plzValue === "") {
        setErrorFor(plz, "Bitte PLZ einfügen. / Please enter your ZIP-code.");
    } else {
        setSuccessFor(plz);
    }
    if (cityValue === "") {
        setErrorFor(city, "Dein Wohnort fehlt. / Your domicile is missing.");
    } else {
        setSuccessFor(city);
    }
    if (emailValue === "") {
        setErrorFor(email, "Email erforderlich. / Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email ungültig. / Invalid Email.");
    } else {
        setSuccessFor(email);
    }

    /*
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = form-Control.querySelector("small");
        formControl.className = "form-control error";
        small.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
        }
        return valid;
    }
    */
    /* Email muss in gültiger Form sein:
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }*/

    /* PLZ muss zwingend vierstellig sein:
        let x = document.getElementById("plz").value;
        let text;
        if (isNaN(x) || x < 4 || x > 4) {
            text = "Ungültig / Invalid";
        } else {
            text = "Input OK";
        }
        document.getElementById("yourBooking").innerHTML = text;*/

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
}

// sessionStorage Setup (save):
sessionStorage.setItem("firstName", document.getElementById("firstName").value);
sessionStorage.setItem("lastName", document.getElementById("lastName").value);
sessionStorage.setItem("address1", document.getElementById("address1").value);
sessionStorage.setItem("address2", document.getElementById("address2").value);
sessionStorage.setItem("plz", document.getElementById("plz").value);
sessionStorage.setItem("domicile", document.getElementById("city").value);
sessionStorage.setItem("email", document.getElementById("email").value);
// sessionStorage.setItem("FormControlSelect1", document.getElementById("FormControlSelect1").value);

//sessionStorage Setup (read):
const firstName = sessionStorage.getItem("firstName");
const lastName = sessionStorage.getItem("lastName");
const address1 = sessionStorage.getItem("address1");
const address2 = sessionStorage.getItem("address2");
const plz = sessionStorage.getItem("plz");
const domicile = sessionStorage.getItem("domicile");
const email = sessionStorage.getItem("email");

