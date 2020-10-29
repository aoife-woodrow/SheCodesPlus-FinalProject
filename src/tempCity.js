function showForecast(response) {
  document.querySelector("h3").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function requestFailed(error) {
  alert("Please insert a city name");
}

function search(city) {
  let apiKey = "d16ead468dd61dfa05bd1b895bcf503d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showForecast).catch(requestFailed);
}

function handleSumbit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  search(city);
}
search("London");

let form = document.querySelector("#weather-form");
form.addEventListener("submit", handleSumbit);
