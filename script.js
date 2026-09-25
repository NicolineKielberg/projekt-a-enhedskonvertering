// Valg af type og konvertering

const type = document.getElementById("type");
const konvertering = document.getElementById("konvertering");

type.addEventListener("change", function () {
    resultat.textContent = "";

    switch (type.value) {

        case "temperatur":
            konvertering.innerHTML =
                '<option value="celsius-fahrenheit">Celsius til Fahrenheit</option>' +
                '<option value="fahrenheit-celsius">Fahrenheit til Celsius</option>';
            break;

        case "længde":
            konvertering.innerHTML =
                '<option value="kilometer-mil">Kilometer til Mil</option>' +
                '<option value="mil-kilometer">Mil til Kilometer</option>';
            break;

        case "vægt":
            konvertering.innerHTML =
                '<option value="kilogram-pund">Kilogram til Pund</option>' +
                '<option value="pund-kilogram">Pund til Kilogram</option>';
            break;

        default:
            konvertering.innerHTML = "";
            break;
    }
});

// Beregning af konvertering og validering af input

const værdiInput = document.getElementById("værdi");
const konverterKnap = document.getElementById("konverterKnap");
const resultat = document.getElementById("resultat");

konverterKnap.addEventListener("click", function () {
    const værdi = Number(værdiInput.value);

    if (værdiInput.value === "" || Number.isNaN(værdi)) {
        resultat.textContent = "Indtast venligst et gyldigt tal.";
    } else {

        let konverteretVærdi;
        let fraEnhed;
        let tilEnhed;

        switch (konvertering.value) {

            case "celsius-fahrenheit":
                konverteretVærdi = værdi * 9 / 5 + 32;
                fraEnhed = "°C";
                tilEnhed = "°F";
                break;

            case "fahrenheit-celsius":
                konverteretVærdi = (værdi - 32) * 5 / 9;
                fraEnhed = "°F";
                tilEnhed = "°C";
                break;

            case "kilometer-mil":
                konverteretVærdi = værdi * 0.6214;
                fraEnhed = "km";
                tilEnhed = "mi";
                break;

            case "mil-kilometer":
                konverteretVærdi = værdi / 0.6214;
                fraEnhed = "mi";
                tilEnhed = "km";
                break;

            case "kilogram-pund":
                konverteretVærdi = værdi * 2.2046;
                fraEnhed = "kg";
                tilEnhed = "lb";
                break;

            case "pund-kilogram":
                konverteretVærdi = værdi / 2.2046;
                fraEnhed = "lb";
                tilEnhed = "kg";
                break;
        
            default:
                resultat.textContent = "Vælg en gyldig konvertering.";
                return;
        }

        resultat.textContent = `${værdi} ${fraEnhed} = ${konverteretVærdi.toFixed(2)} ${tilEnhed}`;
    }
});
