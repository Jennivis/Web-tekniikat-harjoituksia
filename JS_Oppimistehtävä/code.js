let city = "";
let units = "";
let empty = "Syötä kaupunki.";
let degrees = "";
let condition = "";
let rain = "";

function get_weather(){
    
    city = document.getElementById("city").value;
    let url = "http://api.openweathermap.org/data/2.5/find?q=" + city + "&units=metric&appid=6f2ca9083c4737d305a583ac6b71d6eb";

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if(this.readyState === 4 && this.status === 200){
        let weather = JSON.parse(this.response);
        document.getElementById("degrees").innerHTML = weather.list[0].main.temp;
        degrees = weather.list[0].main.temp;
        condition = weather.list[0].weather.id;
        }
    };

    xhttp.open("GET", url, true);

    xhttp.send();
}    


function searchWeather () {
    
    if (city =! "") {
        get_weather ()
    } else {
        empty
        document.getElementById("city").focus();
    }
    classification();
}

 function classification() {
     if (degrees >= 20 && condition == 800) {
         document.getElementById("whatToDo").innerHTML = "Keli on lämmin ja aurinkoinen. Olisiko rantapäivä tänään?"
     } else if (degrees > 5 && degrees < 20) {
         document.getElementById("whatToDo").innerHTML = "Ei mikään rantakeli tänään ainakaan. Ulkoilla voisit kuitenkin."
     } else if (degrees > -5 && degrees < 5) {
         document.getElementById("whatToDo").innerHTML = "Kolea sää tänään. Muista pukeutua lämpimämmin."
     } else if (degrees < -5 && condition == 800) {
         document.getElementById("whatToDo").innerHTML = "Mainio ulkoilukeli tänään! Pitäisikö mennä luistelemaan tai hiihtämään?"
     }
}