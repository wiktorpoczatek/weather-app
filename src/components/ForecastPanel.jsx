function ForecastDay({ day, high, low, description, unit }) {
  return (
    <div style={{
      flex: 1,
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '12px',
      textAlign: 'center',
    }}>
      <p style={{ fontWeight: 'bold', margin: '0 0 4px' }}>{day}</p>
      <p style={{ margin: '0 0 4px', color: '#555', fontSize: '14px' }}>{description}</p>
      <p style={{ margin: 0 }}>
        {high}° / {low}°{unit}
      </p>
    </div>
  )
}

function ForecastPanel({ days, unit }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {days.map(d => (
        <ForecastDay key={d.day} {...d} unit={unit} />
      ))}
    </div>
  )
}

export default ForecastPanel
