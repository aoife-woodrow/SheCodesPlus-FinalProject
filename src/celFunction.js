function tempCel(event) {
  let searchInput = document.querySelector("#search-input");

  if (searchInput.value) {
    event.preventDefault();
    let celPlaceholder = document.querySelector("#currentTemp");
    let tempCel = celPlaceholder.innerHTML;
    celPlaceholder.innerHTML = Math.round(((tempCel - 32) * 5) / 9);
  } else {
    alert("Enter a city");
  }
}
let celClick = document.querySelector("#cel-link");
celClick.addEventListener("click", tempCel);
