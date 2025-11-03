document.getElementById("convertBtn").addEventListener("click", function() {
    var temp = document.getElementById("tempInput").value;
    var type = document.getElementById("conversionType").value;
    var result = document.getElementById("result");

    if (temp === "") {
        result.textContent = "Please enter a value.";
        return;
    }

    temp = parseFloat(temp);

    if (type === "toCelsius") {
        let c = (temp - 32) * 5 / 9;
        result.textContent = temp + "°F = " + c.toFixed(2) + "°C";
    } else {
        let f = (temp * 9 / 5) + 32;
        result.textContent = temp + "°C = " + f.toFixed(2) + "°F";
    }
});
