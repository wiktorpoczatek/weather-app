import WeatherIcon from './WeatherIcon'

function WeatherCard({ city, temperature, description, unit }) {
  return (
    <div style={{
      backgroundColor: 'var(--color-surface)',
      border: 'var(--border-default)',
      borderRadius: 'var(--rounded-lg)',
      padding: '20px',
      marginBottom: '16px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <p style={{
            color: 'var(--color-secondary)',
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}>LOCATION</p>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.95rem' }}>{city}</p>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'var(--color-neutral)',
          border: 'var(--border-accent)',
          borderRadius: 'var(--rounded-sm)',
          padding: '2px 8px',
          fontSize: '0.75rem',
          color: 'var(--color-tertiary)',
          letterSpacing: '0.08em',
          flexShrink: 0,
        }}>
          <span className="blink">●</span>
          LIVE
        </div>
      </div>

      <div style={{ borderTop: 'var(--border-subtle)', paddingTop: '16px', marginBottom: '16px' }}>
        <p style={{
          color: 'var(--color-secondary)',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>TEMP</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <p style={{
            fontSize: '3.5rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: 'var(--color-primary)',
            lineHeight: 1,
            fontFamily: 'inherit',
          }}>
            {temperature}°{unit}
          </p>
          <WeatherIcon description={description} size={48} animated={true} />
        </div>
      </div>

      <div>
        <p style={{
          color: 'var(--color-secondary)',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}>COND</p>
        <p style={{ color: 'var(--color-primary)', fontSize: '0.95rem', textTransform: 'uppercase' }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default WeatherCard
