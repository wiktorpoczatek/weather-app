import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ForecastPanel from './components/ForecastPanel'
import { fetchWeather } from './api/weather'

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [cityName, setCityName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSelect(city) {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchWeather(city.latitude, city.longitude)
      setCityName(`${city.name}, ${city.country}`)
      setWeather(data.current)
      setForecast(data.forecast)
    } catch {
      setError('Failed to load weather. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Weather App</h1>

      <SearchBar onSelect={handleSelect} />

      {loading && <p style={{ textAlign: 'center' }}>Loading…</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {!loading && weather && (
        <>
          <WeatherCard
            city={cityName}
            temperature={weather.temperature}
            description={weather.description}
            unit="C"
          />
          <ForecastPanel days={forecast} unit="C" />
        </>
      )}

      {!loading && !weather && !error && (
        <p style={{ textAlign: 'center', color: '#888' }}>Search for a city to see the weather.</p>
      )}
    </div>
  )
}

export default App
