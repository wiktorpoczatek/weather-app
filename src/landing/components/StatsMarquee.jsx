const STATS = [
  { value: '200,000+', label: 'Cities indexed' },
  { value: '5-day', label: 'Forecast horizon' },
  { value: 'Zero', label: 'API keys needed' },
  { value: '< 1s', label: 'Median response' },
  { value: '~70KB', label: 'Gzipped bundle' },
  { value: '60fps', label: 'Animations' },
  { value: '0', label: 'Tracking cookies' },
]

function MarqueeRow() {
  return (
    <>
      {STATS.map((s, i) => (
        <span className="marquee-item" key={i}>
          <strong>{s.value}</strong> {s.label}
          <span className="marquee-sep">//</span>
        </span>
      ))}
    </>
  )
}

function StatsMarquee() {
  return (
    <div className="marquee" aria-hidden="false" aria-label="Project stats">
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  )
}

export default StatsMarquee
