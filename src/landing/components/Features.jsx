import WeatherIcon from '../../components/WeatherIcon'
import Reveal from './Reveal'

const FEATURES = [
  {
    icon: 'mainly clear',
    title: 'Instant city search',
    desc: 'Type two characters and an autocomplete dropdown narrows it down from a quarter-million cities. Results stream in under 300 ms.',
    kbd: 'GET /v1/search',
  },
  {
    icon: 'overcast',
    title: 'Live current conditions',
    desc: 'Temperature and weather code pulled from Open-Meteo on every search. The blinking LIVE chip is not a lie — it is the freshest data the API has.',
    kbd: 'WMO codes 0–99',
  },
  {
    icon: 'rain',
    title: '5-day outlook',
    desc: 'Daily highs and lows for the work week ahead. Same source, same call — Open-Meteo bundles current and daily into a single request.',
    kbd: 'forecast_days=5',
  },
  {
    icon: 'thunderstorm',
    title: 'Hand-drawn weather icons',
    desc: 'Six SVG icons, each with its own loop: rain drips, clouds drift, storms flash. All transform-only, 60fps, zero JS during animation.',
    kbd: '6 SVG / 0 sprites',
  },
  {
    icon: 'foggy',
    title: 'No API key required',
    desc: 'Open-Meteo serves free, non-commercial requests with no auth. The fetch happens straight from the browser — there is no backend in the loop.',
    kbd: 'env_count = 0',
  },
  {
    icon: 'snow',
    title: 'Pocket-sized',
    desc: 'Vanilla React, Vite, and CSS variables. The whole production build is ~70 KB gzipped — smaller than this paragraph is long.',
    kbd: 'vite build',
  },
]

function Features() {
  return (
    <section className="section" id="features">
      <Reveal>
        <div className="section-eyebrow">Features</div>
        <h2 className="section-title">
          Six things it does well. Nothing it doesn&rsquo;t.
        </h2>
        <p className="section-lede">
          Built one step at a time as a learning project, so every feature is
          scoped tight. No telemetry, no settings panel, no &ldquo;pro&rdquo; tier.
        </p>
      </Reveal>

      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 60} className="feature-card">
            <div className="feature-icon">
              <WeatherIcon description={f.icon} size={22} animated={true} />
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
            <span className="feature-kbd">
              <span style={{ color: 'var(--color-secondary)', marginRight: '6px' }}>$</span>
              {f.kbd}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Features
