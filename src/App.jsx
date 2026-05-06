import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ForecastPanel from './components/ForecastPanel'
import { fetchWeather } from './api/weather'

const CHARS = '0123456789ABCDEF>|/-\\'
const COLS = 60
const ROWS = 4

function randomCell() {
  const r = Math.random()
  return {
    char: CHARS[Math.floor(Math.random() * CHARS.length)],
    color: r < 0.06 ? 'tertiary' : r < 0.22 ? 'primary' : 'secondary',
  }
}

const COLOR_MAP = {
  tertiary: 'var(--color-tertiary)',
  primary:  'var(--color-primary)',
  secondary: 'var(--color-secondary)',
}

function MatrixLoader() {
  const [cells, setCells] = useState(() => Array.from({ length: COLS * ROWS }, randomCell))

  useEffect(() => {
    const id = setInterval(() => setCells(g => g.map(() => randomCell())), 150)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fade-in" style={{ padding: '24px 0' }}>
      <div style={{ marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '0.18em', lineHeight: 1.7 }}>
        {Array.from({ length: ROWS }, (_, r) => (
          <div key={r} style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
            {cells.slice(r * COLS, (r + 1) * COLS).map((cell, c) => (
              <span key={c} style={{ color: COLOR_MAP[cell.color] }}>{cell.char}</span>
            ))}
          </div>
        ))}
      </div>
      <div style={{ color: 'var(--color-secondary)', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
        <span className="blink" style={{ color: 'var(--color-tertiary)' }}>{'>'}</span>
        {' FETCHING DATA...'}
      </div>
    </div>
  )
}

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
      const [data] = await Promise.all([
        fetchWeather(city.latitude, city.longitude),
        new Promise(resolve => setTimeout(resolve, 1800)),
      ])
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
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 24px' }}>
      <header style={{ marginBottom: '40px', borderBottom: 'var(--border-subtle)', paddingBottom: '20px' }}>
        <p style={{
          color: 'var(--color-tertiary)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '6px',
        }}>
          SYSTEM // WEATHER
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-primary)', fontFamily: 'inherit' }}>
          WEATHER APP
        </h1>
      </header>

      <SearchBar onSelect={handleSelect} />

      {loading && <MatrixLoader />}

      {error && (
        <div style={{
          padding: '12px 16px',
          border: '1px solid var(--color-error)',
          borderRadius: 'var(--rounded-md)',
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ color: 'var(--color-error)', fontSize: '0.75rem', letterSpacing: '0.08em', flexShrink: 0 }}>ERROR</span>
          <span style={{ color: 'var(--color-secondary)', fontSize: '0.95rem' }}>{error}</span>
        </div>
      )}

      {!loading && weather && (
        <div key={cityName}>
          <div className="reveal">
            <WeatherCard
              city={cityName}
              temperature={weather.temperature}
              description={weather.description}
              unit="C"
            />
          </div>
          <div className="reveal-delayed">
            <ForecastPanel days={forecast} unit="C" />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
