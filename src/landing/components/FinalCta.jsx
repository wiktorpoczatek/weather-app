import Reveal from './Reveal'

function FinalCta() {
  return (
    <section className="section" id="cta">
      <Reveal className="cta-card">
        <div className="section-eyebrow">Ready when you are</div>
        <h2 className="cta-title">
          Check tomorrow&rsquo;s weather. Today.
        </h2>
        <p className="cta-sub">
          One field. One forecast. No accounts to make, no cookies to refuse.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#app" className="btn btn-primary">
            Launch the app
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/wiktorpoczatek/weather-app"
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            Read the source
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export default FinalCta
