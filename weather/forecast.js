
const CNT = 7;
const FORECASTURL = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${CNT}&appid=${APIKEY}`;

function loadForecast() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            alert(`Payload bad (code ${this.status})`);
            return;
        }
        document.getElementById("jsontext").innerHTML = this.responseText;
        displayForecast(JSON.parse(this.responseText));
    }
    xhttp.open("GET", FORECASTURL, true);
    xhttp.send();
}

function displayForecast(json) {
    document.getElementById("location").innerHTML = `${json.name}, ${json.sys.country}`;
    document.getElementById("condition").innerHTML = json.weather[0].main;
}