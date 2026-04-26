function WeatherCard({ city, temperature, description, unit }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '24px',
      textAlign: 'center',
    }}>
      <h2 style={{ margin: '0 0 8px' }}>{city}</h2>
      <p style={{ fontSize: '48px', margin: '0 0 8px' }}>
        {temperature}°{unit}
      </p>
      <p style={{ margin: 0, color: '#555' }}>{description}</p>
    </div>
  )
}

export default WeatherCard
