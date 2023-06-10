function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}

let apiKey = "t704280baa3dd7ffc473of4f1b484aa4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${aipKey}$units=metric`;

axios.get(apiUrl).then(displayTemperature);
