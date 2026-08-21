// Fetch and axios are used mostly in production to fetch data from API and try/catch is used to handle Response and Errors.

async function fetchWeather() {
  const url = ` https://api.open-meteo.com/v1/forecast?latitude=23.0258&longitude=72.5873&hourly=temperature_2m`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

fetchWeather();
