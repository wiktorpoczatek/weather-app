import PreviewFrame from './PreviewFrame'
import Reveal from './Reveal'
import WeatherCard from '../../components/WeatherCard'
import ForecastPanel from '../../components/ForecastPanel'

const DEMO_CURRENT = {
  city: 'Reykjavik, Iceland',
  temperature: 4,
  description: 'Light snow',
}
const DEMO_FORECAST = [
  { day: 'MON', high: 5,  low: -1, description: 'Light snow' },
  { day: 'TUE', high: 6,  low: 0,  description: 'Overcast' },
  { day: 'WED', high: 7,  low: 2,  description: 'Mainly clear' },
  { day: 'THU', high: 4,  low: -2, description: 'Light rain' },
  { day: 'FRI', high: 3,  low: -3, description: 'Light snow' },
]

const BULLETS = [
  {
    head: 'It is the actual app',
    body: 'These cards are the same React components that render in production. No mockups, no Figma export — what you see here ships.',
  },
  {
    head: 'Animations earn their keep',
    body: 'The LIVE dot blinks to signal fresh data. The sun rotates because clear days are spinning Earth. Snowflakes drift down because, well.',
  },
  {
    head: 'Built for keyboard-first use',
    body: 'Focus the search, type, arrow through results, hit enter. No mouse required on any path.',
  },
]

function Demo() {
  return (
    <section className="section" id="demo">
      <Reveal>
        <div className="section-eyebrow">Live preview</div>
        <h2 className="section-title">
          What you see is what you ship.
        </h2>
        <p className="section-lede">
          The cards below are mounted with the same JSX the real app uses —
          just with the temperature wired to a fixture instead of a fetch.
        </p>
      </Reveal>

      <div className="demo-split">
        <Reveal>
          <div>
            {BULLETS.map(b => (
              <div className="demo-bullet" key={b.head}>
                <span className="demo-bullet-tick">→</span>
                <div className="demo-bullet-text">
                  <strong>{b.head}.</strong> {b.body}
                </div>
              </div>
            ))}
            <a href="#app" className="btn btn-primary" style={{ marginTop: '12px' }}>
              Try it yourself
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <PreviewFrame title="weather // reykjavik" url="weather.app/?q=reykjavik">
            <WeatherCard
              city={DEMO_CURRENT.city}
              temperature={DEMO_CURRENT.temperature}
              description={DEMO_CURRENT.description}
              unit="C"
            />
            <ForecastPanel days={DEMO_FORECAST} unit="C" />
          </PreviewFrame>
        </Reveal>
      </div>
    </section>
  )
}

export default Demo
