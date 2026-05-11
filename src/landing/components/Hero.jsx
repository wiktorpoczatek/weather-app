import { useEffect, useState } from 'react'
import PreviewFrame from './PreviewFrame'
import WeatherCard from '../../components/WeatherCard'
import ForecastPanel from '../../components/ForecastPanel'

const FLOATERS = ['01010', '> SYS', '0xFE', '∆ 17°', 'OK', '> ACK', 'TEMP', 'WMO 1']

function Floaters() {
  const [seed] = useState(() => Math.floor(Math.random() * 1000))
  const items = Array.from({ length: 10 }, (_, i) => {
    const left = ((seed + i * 137) % 100)
    const delay = (i * 1.1) % 9
    const text = FLOATERS[(i + seed) % FLOATERS.length]
    const bottom = ((seed + i * 53) % 60)
    return { left, delay, text, bottom, key: i }
  })
  return (
    <div className="hero-floaters" aria-hidden="true">
      {items.map(f => (
        <span
          key={f.key}
          className="hero-floater"
          style={{
            left: `${f.left}%`,
            bottom: `${f.bottom}%`,
            animationDelay: `${f.delay}s`,
          }}
        >
          {f.text}
        </span>
      ))}
    </div>
  )
}

const DEMO_CURRENT = {
  city: 'Tokyo, Japan',
  temperature: 17,
  description: 'Mainly clear',
}
const DEMO_FORECAST = [
  { day: 'MON', high: 23, low: 13, description: 'Mainly clear' },
  { day: 'TUE', high: 23, low: 15, description: 'Mainly clear' },
  { day: 'WED', high: 24, low: 13, description: 'Overcast' },
  { day: 'THU', high: 25, low: 15, description: 'Light rain' },
  { day: 'FRI', high: 22, low: 14, description: 'Overcast' },
]

function Hero() {
  const [boot, setBoot] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setBoot(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="section hero" id="top">
      <Floaters />
      <div style={{ position: 'relative' }}>
        <div className="section-eyebrow">SYSTEM // INITIALIZED</div>
        <h1 className="hero-headline">
          Weather, but make it{' '}
          <span className="hero-headline-accent">
            terminal
            <span className="blink" style={{ marginLeft: '4px' }}>_</span>
          </span>
        </h1>
        <p className="hero-sub">
          Real-time conditions and a 5-day forecast for 200,000+ cities. No API
          keys. No accounts. No tracking. Type a city, hit enter, get the answer.
        </p>
        <div className="hero-ctas">
          <a href="#app" className="btn btn-primary">
            Launch app
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/wiktorpoczatek/weather-app"
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            View source
          </a>
        </div>
        <div className="hero-meta">
          <span className="hero-meta-row">
            <span className="hero-meta-check">[x]</span> Free forever
          </span>
          <span className="hero-meta-row">
            <span className="hero-meta-check">[x]</span> No signup
          </span>
          <span className="hero-meta-row">
            <span className="hero-meta-check">[x]</span> Open source
          </span>
        </div>
      </div>

      <div
        style={{
          opacity: boot ? 1 : 0,
          transform: boot ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          transitionDelay: '0.15s',
        }}
      >
        <PreviewFrame title="weather // tokyo" url="weather.app/?q=tokyo">
          <WeatherCard
            city={DEMO_CURRENT.city}
            temperature={DEMO_CURRENT.temperature}
            description={DEMO_CURRENT.description}
            unit="C"
          />
          <ForecastPanel days={DEMO_FORECAST} unit="C" />
        </PreviewFrame>
      </div>
    </section>
  )
}

export default Hero
