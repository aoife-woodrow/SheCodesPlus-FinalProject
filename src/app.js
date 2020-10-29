let getDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[getDate.getDay()];

let hour = getDate.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let min = getDate.getMinutes();
if (min < 10) {
  min = `0${min}`;
}

let h4 = document.querySelector("h4");
h4.innerHTML = `${day} ${hour}:${min}`;

function searchLocation(position) {
  let apiKey = "d16ead468dd61dfa05bd1b895bcf503d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
}

function showForecast(response) {
    celTemp = response.data.main.temp;

    document.querySelector("h3").innerHTML = response.data.name;
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#currentTemp").innerHTML = Math.round(celTemp);
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#icon").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);;
}

function search(city) {
  let apiKey = "d16ead468dd61dfa05bd1b895bcf503d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showForecast);
}

function handleSumbit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  search(city.value);
}

let form = document.querySelector("#weather-form");
form.addEventListener("submit", handleSumbit);

function tempFah(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#currentTemp");
    celLink.classList.remove("active");
    fahLink.classList.add("active");
    let fahTemp = (celTemp * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahTemp);

}

function tempCel(event){
    event.preventDefault();
    celLink.classList.add("active");
    fahLink.classList.remove("active");
    let temperatureElement = document.querySelector("#currentTemp");
    temperatureElement.innerHTML = Math.round(celTemp);
}

search("Londonderry");

let celTemp = null;

let fahLink = document.querySelector("#fah-link");
fahLink.addEventListener("click", tempFah);

let celLink = document.querySelector("#cel-link");
celLink.addEventListener("click", tempCel);