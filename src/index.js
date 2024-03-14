function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  let apiQuery = searchInputElement.value;
  console.log(apiQuery);
  let apiKey = "9b88f302eda2e45a60aa86o7bcab4tbd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${apiQuery}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
function displayWeather(response) {
  let cityElement = document.querySelector("#current-city");
  let cityValue = response.data.city;
  if (cityValue === undefined) {
    cityElement.innerHTML = "No results found";
  } else {
    cityElement.innerHTML = cityValue;
  }

  let tempCurrentElement = document.querySelector(".current-temperature-value");
  let tempValue = Math.round(response.data.temperature.current);
  tempCurrentElement.innerHTML = tempValue;
  console.log(response.data.temperature.current);
  let emojiElement = document.querySelector(".current-temperature-icon");

  if (tempValue <= 8) {
    emojiElement.innerHTML = "❄";
  } else {
    emojiElement.innerHTML = "☀️";
  }
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
