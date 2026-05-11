import Reveal from './Reveal'

const STEPS = [
  {
    n: '01',
    cmd: 'type a city',
    body: 'Start typing. After two characters the geocoding endpoint kicks in with a 300 ms debounce. Pick from up to five suggestions.',
    out: 'matched 5 cities · 187 ms',
  },
  {
    n: '02',
    cmd: 'resolve coordinates',
    body: 'Selecting a city captures its latitude and longitude. That pair is the only handshake the weather endpoint needs.',
    out: 'lat 35.69 / lon 139.69',
  },
  {
    n: '03',
    cmd: 'render the forecast',
    body: 'A single forecast call returns current conditions and five days of highs and lows. The card reveals first, the forecast staggers in 180 ms later.',
    out: '200 OK · cached at edge',
  },
]

function HowItWorks() {
  return (
    <section className="section" id="how">
      <Reveal>
        <div className="section-eyebrow">Pipeline</div>
        <h2 className="section-title">
          Three calls. One render. No backend.
        </h2>
        <p className="section-lede">
          Every search runs the same three steps. The whole loop completes in
          well under a second on a warm connection.
        </p>
      </Reveal>

      <div className="steps">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 100} className="step">
            <div className="step-header">
              <span className="step-num">{s.n}</span>
              <span className="step-cmd">
                <span className="step-cmd-prompt">$</span>
                {s.cmd}
              </span>
            </div>
            <p className="step-body">{s.body}</p>
            <div className="step-output">
              <span className="step-output-key">→</span>
              {s.out}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
