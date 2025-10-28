const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("weatherResult");
const themeToggle = document.getElementById("themeToggle");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    resultDiv.innerHTML = "<p>⚠️ Please enter a city name!</p>";
    return;
  }

  resultDiv.innerHTML = "<p>⏳ Fetching weather data...</p>";

  try {
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      resultDiv.innerHTML = "<p>❌ City not found!</p>";
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
    const weather = weatherData.current_weather;

    let icon;
    if (weather.temperature > 30) icon = "🔥";
    else if (weather.temperature > 20) icon = "🌞";
    else if (weather.temperature > 10) icon = "🌤️";
    else icon = "❄️";

    resultDiv.innerHTML = `
      <h3>${icon} ${name}, ${country}</h3>
      <p>🌡️ Temperature: <strong>${weather.temperature}°C</strong></p>
      <p>💨 Wind Speed: ${weather.windspeed} km/h</p>
      <p>🕒 ${weather.time}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "<p>❌ Failed to fetch weather data!</p>";
    console.error(error);
  }
}

// 🌙 Theme Toggle
const body = document.body;
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// 📲 PWA Install Button Logic
let deferredPrompt;
const installBtn = document.getElementById("installBtn");
const popup = document.getElementById("installPopup");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "inline-block";

  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 3000);
});

installBtn.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      installBtn.style.display = "none";
    }
    deferredPrompt = null;
  }
});
