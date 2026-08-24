const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

let currentCity = null;

// UI helpers
function showLoading() {
  document.getElementById("loading").hidden = false;
  document.getElementById("error").textContent = "";
  document.getElementById("weather").innerHTML = "";
}

function hideLoading() {
  document.getElementById("loading").hidden = true;
}

function showError(msg) {
  hideLoading();
  document.getElementById("error").textContent = msg;
}

// Weather code → text
function getWeatherDesc(code) {
  const map = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Dense drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    95: "Thunderstorm",
  };
  return map[code] || "Unknown";
}

// Recent cities
function saveRecent(cityName) {
  const key = "recentCities";
  const raw = localStorage.getItem(key) || "[]";
  const arr = JSON.parse(raw);

  const filtered = arr.filter(
    (c) => c.toLowerCase() !== cityName.toLowerCase(),
  );
  const updated = [cityName, ...filtered].slice(0, 5);

  localStorage.setItem(key, JSON.stringify(updated));
  renderRecent();
}

function renderRecent() {
  const key = "recentCities";
  const raw = localStorage.getItem(key) || "[]";
  const cities = JSON.parse(raw);

  const box = document.getElementById("recentSearches");
  box.innerHTML = "";

  if (cities.length === 0) {
    box.textContent = "No recent searches.";
    return;
  }

  cities.forEach((name) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.onclick = () => searchCity(name);
    box.appendChild(btn);
  });
}

// API calls
async function getLatLon(city) {
  const url = `${GEO_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Geocoding failed");

  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  const r = data.results[0];
  return {
    name: r.name + (r.admin1 ? ", " + r.admin1 : ""),
    lat: r.latitude,
    lon: r.longitude,
  };
}

async function getWeather(lat, lon) {
  const url = `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather request failed");

  const data = await res.json();
  const c = data.current;

  return {
    temp: c.temperature_2m,
    humidity: c.relative_humidity_2m,
    wind: c.wind_speed_10m,
    code: c.weather_code,
  };
}

// Main search
async function searchCity(city) {
  if (!city || !city.trim()) {
    showError("Please enter a city name.");
    return;
  }

  showLoading();
  currentCity = city.trim();

  try {
    const geo = await getLatLon(currentCity);
    const w = await getWeather(geo.lat, geo.lon);

    hideLoading();

    const box = document.getElementById("weather");
    box.innerHTML = `
      <h2>${geo.name}</h2>
      <p>Temperature: ${w.temp.toFixed(1)} °C</p>
      <p>Humidity: ${w.humidity} %</p>
      <p>Wind Speed: ${w.wind} m/s</p>
      <p>Description: ${getWeatherDesc(w.code)}</p>
    `;

    saveRecent(geo.name);
  } catch (err) {
    console.error(err);
    let msg = "Failed to load weather.";
    if (err.message.includes("City not found")) {
      msg = "City not found. Check spelling.";
    } else if (
      err.message.includes("Network") ||
      err.message.includes("fetch")
    ) {
      msg = "Network error. Check your internet.";
    }
    showError(msg);
  }
}

// Form & buttons
document.getElementById("weatherForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.getElementById("cityInput").value;
  searchCity(city);
});

document.getElementById("refreshBtn").addEventListener("click", () => {
  if (!currentCity) {
    showError("No city loaded. Search first.");
    return;
  }
  searchCity(currentCity);
});

// Init
renderRecent();
