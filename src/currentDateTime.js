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
