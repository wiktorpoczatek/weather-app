const CONDITION_TO_ICON = {
  'clear sky':               'sun',
  'mainly clear':            'sun',
  'partly cloudy':           'cloud',
  'overcast':                'cloud',
  'foggy':                   'wind',
  'icy fog':                 'wind',
  'light drizzle':           'rain',
  'drizzle':                 'rain',
  'heavy drizzle':           'rain',
  'light rain':              'rain',
  'rain':                    'rain',
  'heavy rain':              'rain',
  'light snow':              'snow',
  'snow':                    'snow',
  'heavy snow':              'snow',
  'light showers':           'rain',
  'showers':                 'rain',
  'heavy showers':           'rain',
  'thunderstorm':            'storm',
  'thunderstorm with hail':  'storm',
}

const BASE = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function SunIcon({ size, animated }) {
  return (
    <svg {...BASE} width={size} height={size} style={{
      color: 'var(--color-sun)',
      display: 'block',
      transformOrigin: 'center',
      animation: animated ? 'spin-slow 18s linear infinite' : undefined,
    }}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  )
}

function CloudIcon({ size, animated }) {
  return (
    <svg {...BASE} width={size} height={size} style={{
      color: 'var(--color-primary)',
      display: 'block',
      animation: animated ? 'cloud-drift 5s ease-in-out infinite' : undefined,
    }}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
    </svg>
  )
}

function RainIcon({ size, animated }) {
  const drop = (delay) => animated ? {
    animation: `drop-fall 1.2s ease-in ${delay}s infinite`,
    transformBox: 'fill-box',
    transformOrigin: 'top center',
  } : {}

  return (
    <svg {...BASE} width={size} height={size} style={{ color: 'var(--color-primary)', display: 'block' }}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
      <line x1="11" y1="13" x2="11" y2="15" stroke="var(--color-tertiary)" style={drop(0)} />
      <line x1="15" y1="15" x2="15" y2="17" stroke="var(--color-tertiary)" style={drop(0.3)} />
      <line x1="11" y1="18" x2="11" y2="20" stroke="var(--color-tertiary)" style={drop(0.6)} />
      <line x1="15" y1="20" x2="15" y2="22" stroke="var(--color-tertiary)" style={drop(0.9)} />
    </svg>
  )
}

function SnowIcon({ size, animated }) {
  return (
    <svg {...BASE} width={size} height={size} style={{ color: 'var(--color-primary)', display: 'block' }}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
      <path
        stroke="var(--color-tertiary)"
        d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01"
        style={{
          transformOrigin: 'center',
          animation: animated ? 'snow-fall 2.8s ease-in-out infinite' : undefined,
        }}
      />
    </svg>
  )
}

function StormIcon({ size, animated }) {
  return (
    <svg {...BASE} width={size} height={size} style={{ color: 'var(--color-primary)', display: 'block' }}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
      <path
        stroke="var(--color-sun)"
        d="M13 14l-2 4l3 0l-2 4"
        style={{ animation: animated ? 'storm-flash 4s linear infinite' : undefined }}
      />
    </svg>
  )
}

function WindIcon({ size, animated }) {
  return (
    <svg {...BASE} width={size} height={size} style={{
      color: 'var(--color-primary)',
      display: 'block',
      animation: animated ? 'wind-blow 3s ease-in-out infinite' : undefined,
    }}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
      <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
      <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
    </svg>
  )
}

const ICONS = { sun: SunIcon, cloud: CloudIcon, rain: RainIcon, snow: SnowIcon, storm: StormIcon, wind: WindIcon }

function WeatherIcon({ description, size = 24, animated = false }) {
  const name = CONDITION_TO_ICON[description?.toLowerCase()] ?? 'cloud'
  const Icon = ICONS[name]
  return <Icon size={size} animated={animated} />
}

export default WeatherIcon
