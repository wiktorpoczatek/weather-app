# Weather App

A browser-based weather app built with React + Vite. Search any city to get current conditions and a 5-day forecast — no API key required.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

See it live here: **https://weather-app-olive-xi-93.vercel.app/**

---

## Features

- City search with autocomplete suggestions
- Current temperature and weather conditions
- 5-day forecast panel
- Terminal-style UI with animations
- Free weather data — no API key needed

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite |
| Weather data | [Open-Meteo](https://open-meteo.com/) (free, no API key) |
| Geocoding | Open-Meteo Geocoding API |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/wiktorpoczatek/weather-app.git
cd weather-app

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |

## How It Works

1. User types a city name — the app calls the Open-Meteo geocoding API to get coordinates
2. Coordinates are passed to the Open-Meteo forecast API for current conditions + 5-day forecast
3. Results animate in: current weather card first, then the forecast panel

All API calls happen directly in the browser — there is no backend.

## Project Structure

```
src/
├── api/
│   └── weather.js          # API fetch logic (geocoding + weather)
├── components/
│   ├── SearchBar.jsx        # City search with autocomplete
│   ├── WeatherCard.jsx      # Current conditions display
│   ├── ForecastPanel.jsx    # 5-day forecast row
│   └── WeatherIcon.jsx      # Weather condition icons
├── App.jsx                  # Root component — state and layout
└── main.jsx                 # React entry point
```

## License

MIT
