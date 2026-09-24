// Valg af konvertering

const category = document.getElementById("category");
const conversion = document.getElementById("conversion");

category.addEventListener("change", function () {

    switch (category.value) {

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