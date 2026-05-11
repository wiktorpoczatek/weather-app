import Reveal from './Reveal'

const STACK = [
  { label: 'Framework', name: 'React 18', meta: 'Components + hooks, no extras' },
  { label: 'Bundler',   name: 'Vite 6',   meta: 'ES modules, hot reload, prod build' },
  { label: 'Data',      name: 'Open-Meteo', meta: 'Free weather + geocoding APIs' },
  { label: 'Hosting',   name: 'Vercel',   meta: 'Static deploy from main' },
]

function TechStack() {
  return (
    <section className="section" id="stack">
      <Reveal>
        <div className="section-eyebrow">Stack</div>
        <h2 className="section-title">
          Four pieces. No bundler config tweaks. Nothing else.
        </h2>
        <p className="section-lede">
          The dependency tree fits in one screen. If you can read{' '}
          <code style={{ color: 'var(--color-tertiary)' }}>package.json</code>,
          you already know the architecture.
        </p>
      </Reveal>

      <div className="stack-grid">
        {STACK.map((s, i) => (
          <Reveal key={s.name} delay={i * 70} className="stack-card">
            <div className="stack-label">{s.label}</div>
            <div className="stack-name">{s.name}</div>
            <div className="stack-meta">{s.meta}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default TechStack
