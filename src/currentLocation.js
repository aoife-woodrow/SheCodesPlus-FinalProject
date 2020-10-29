function showForecast(response) {
  document.querySelector("h3").innerHTML = response.data.name;

  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchLocation(position) {
  let apiKey = "d16ead468dd61dfa05bd1b895bcf503d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
}

function getCurrentLocation(event) {
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let button = document.querySelector("#currentLocation");
button.addEventListener("click", getCurrentLocation);
