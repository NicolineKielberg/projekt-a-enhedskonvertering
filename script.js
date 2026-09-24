// Valg af type og konvertering

const type = document.getElementById("type");
const conversion = document.getElementById("conversion");

type.addEventListener("change", function () {
    result.textContent = "";

    switch (type.value) {

        case "temperature":
            conversion.innerHTML =
                '<option value="celsius-fahrenheit">Celsius til Fahrenheit</option>' +
                '<option value="fahrenheit-celsius">Fahrenheit til Celsius</option>';
            break;

        case "length":
            conversion.innerHTML =
                '<option value="kilometer-mile">Kilometer til Miles</option>' +
                '<option value="mile-kilometer">Miles til Kilometer</option>';
            break;

        case "weight":
            conversion.innerHTML =
                '<option value="kilogram-pound">Kilogram til Pund</option>' +
                '<option value="pound-kilogram">Pund til Kilogram</option>';
            break;

         default:
            conversion.innerHTML = "";
            break;
    }
});

// Beregning af konvertering og validering af input

const valueInput = document.getElementById("value");
const convertButton = document.getElementById("convertButton");
const result = document.getElementById("result");

convertButton.addEventListener("click", function () {
    const value = Number(valueInput.value);

    if (valueInput.value === "" || Number.isNaN(value)) {
        result.textContent = "Indtast venligst et gyldigt tal.";
        
    } else {

        let convertedValue;
        let fromUnit;
        let toUnit;

        switch (conversion.value) {

            case "celsius-fahrenheit":
                convertedValue = value * 9 / 5 + 32;
                fromUnit = "°C";
                toUnit = "°F";
                break;

            case "fahrenheit-celsius":
                convertedValue = (value - 32) * 5 / 9;
                fromUnit = "°F";
                toUnit = "°C";
                break;

            case "kilometer-mile":
                convertedValue = value * 0.6214;
                fromUnit = "km";
                toUnit = "mi";
                break;

            case "mile-kilometer":
                convertedValue = value / 0.6214;
                fromUnit = "mi";
                toUnit = "km";
                break;

            case "kilogram-pound":
                convertedValue = value * 2.2046;
                fromUnit = "kg";
                toUnit = "lb";
                break;

            case "pound-kilogram":
                convertedValue = value / 2.2046;
                fromUnit = "lb";
                toUnit = "kg";
                break;
        
            default:
                result.textContent = "Vælg en gyldig konvertering.";
                return;
        }

        result.textContent = `${value} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
    }
});
