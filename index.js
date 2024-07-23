var apikey = "2de69d66b9bb6a7203692b84617a9335";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    var response = await fetch(`${apiUrl}${city}&appid=${apikey}`);
    if(response.status==404){
        document.querySelector('.type').style.display="flex";
        document.querySelector('.storm').style.display = "none";
    }
    else{
        document.querySelector('.type').style.display="none";
        document.querySelector('.storm').style.display = "flex";
    
    }
  
    var data = await response.json();
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.hello').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind1').innerHTML = data.wind.speed + " km/h";
    
    var w = document.querySelector('.weather1');
    if(data.weather[0].main == "Clouds"){
        w.src="images/clouds.png";
    } else if(data.weather[0].main == "Clear"){
        w.src="images/clear.png";
    } else if(data.weather[0].main == "Rain"){
        w.src="images/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        w.src="images/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        w.src="images/mist.png";
    }
}

function bro() {
    var search = document.querySelector('.search input').value;
  checkWeather(search)
}