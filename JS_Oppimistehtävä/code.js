let q = ""
let empty = "Syötä kaupunki."
let appID = "6f2ca9083c4737d305a583ac6b71d6eb"

function get_weather () {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather", true);
}

function searchWeather () {
    q = document.getElementById("city").value;

    if (q =! "") {
        get_weather (q)
    } else {
        empty
        document.getElementById("city").focus();
    }
}

function classification() {
    if (sää >= 20 && weather.id == 800) {
        document.getElementById("whatToDo").innerHTML = "Keli on lämmin ja aurinkoinen. Olisiko rantapäivä tänään?"
    } else if (sää > 5 && sää < 20 && rain == rain.h) {
        document.getElementById("whatToDo").innerHTML = "Sadetta luvassa. Muista sateenvarjo ja kumisaappaat!"
    } else if (sää > -5 && sää < 5) {
        document.getElementById("whatToDo").innerHTML = "Koleaa säätä luvassa. Muista pukeutua lämpimämmin."
    } else if (sää < -5 && weather.id == 800) {
        document.getElementById("whatToDo").innerHTML = "Mainio ulkoilukeli tänään! Pitäisikö mennä luistelemaan tai hiihtämään?"
    }
}