import WeatherIcon from './WeatherIcon'

function ForecastDay({ day, high, low, description, unit }) {
  return (
    <div style={{
      flex: 1,
      backgroundColor: 'var(--color-surface)',
      border: 'var(--border-default)',
      borderRadius: 'var(--rounded-lg)',
      padding: '12px',
      textAlign: 'center',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    }}>
      <p style={{
        fontWeight: 600,
        color: 'var(--color-tertiary)',
        fontSize: '0.75rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>{day}</p>
      <WeatherIcon description={description} size={20} animated={false} />
      <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem' }}>
        {high}°<span style={{ color: 'var(--color-secondary)' }}>/</span>{low}°{unit}
      </p>
    </div>
  )
}

function ForecastPanel({ days, unit }) {
  return (
    <div>
      <p style={{
        color: 'var(--color-secondary)',
        fontSize: '0.75rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: '12px',
      }}>5-DAY FORECAST</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        {days.map(d => (
          <ForecastDay key={d.day} {...d} unit={unit} />
        ))}
      </div>
    </div>
  )
}

export default ForecastPanel
