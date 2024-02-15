function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;

    if (isNaN(temperatureInput)) {
        alert("Masukkan suhu dalam angka.");
        return;
    }

    var celsius = parseFloat(temperatureInput);
    var fahrenheit = celsiusToFahrenheit(celsius);

    document.getElementById("result").value = `Hasil: ${fahrenheit.toFixed(2)} °F`;

    // Menampilkan penjelasan kalkulasi
    var calculationExplanation = document.getElementById("calculationExplanation");
    calculationExplanation.innerHTML = `<strong>Penjelasan Kalkulasi:</strong><br>
                                       ( ${celsius} °C × 9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
