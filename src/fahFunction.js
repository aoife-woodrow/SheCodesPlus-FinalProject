function tempFah(event) {
  let searchInput = document.querySelector("#search-input");

  if (searchInput.value) {
    event.preventDefault();
    let tempPlaceholder = document.querySelector("#currentTemp");
    let tempFah = tempPlaceholder.innerHTML;
    tempPlaceholder.innerHTML = Math.round((tempFah * 9) / 5 + 32);
  } else {
    alert("Enter a city");
  }
}

let fahClick = document.querySelector("#fah-link");
fahClick.addEventListener("click", tempFah);
