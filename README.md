# 🌦️ Weather Now

### 🧍‍♂️ User Persona
**Name:** Jamie  
**Occupation:** Outdoor Enthusiast  
**Need:** Jamie wants to check current weather conditions quickly for any city before heading outdoors.

---

## 🚀 Project Overview
**Weather Now** is a simple, colorful, and responsive web application that displays **real-time weather information** for any city in the world using the **Open-Meteo API**.  
The app is designed to be user-friendly, fast, and accessible on both mobile and desktop devices.

---

## 🌍 Features
- 🌤️ **Live Weather Data:** Displays temperature, wind speed, and current time instantly.
- 🌈 **Modern & Colorful UI:** Eye-catching gradient backgrounds and animations.
- 📱 **Responsive Design:** Works smoothly on phones, tablets, and desktops.
- 🌙 **Dark / Light Mode:** Users can switch between themes easily.
- ⚙️ **Offline Support:** Caches essential files using a service worker.
- 📲 **Installable PWA:** Can be added to home screen or desktop for quick access.

---

## 🧰 Tech Stack
- **HTML5** — structure and layout  
- **CSS3** — responsive design and animations  
- **JavaScript (ES6)** — logic and API integration  
- **Open-Meteo API** — for fetching real-time weather data  
- **PWA Features** — manifest & service worker

---

## 🌤️ API Information
**API Used:** [Open-Meteo API](https://open-meteo.com/)  
**Endpoints:**
```js
// Get coordinates by city name
https://geocoding-api.open-meteo.com/v1/search?name={city}

// Get current weather
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true
