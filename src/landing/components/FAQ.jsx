import Reveal from './Reveal'

const QA = [
  {
    q: 'Why no API key?',
    a: 'Open-Meteo is free for non-commercial use and does not require authentication. The fetch goes straight from the browser to their public endpoint. If you want to use the same code commercially, their docs cover the paid tier.',
  },
  {
    q: 'Does it work offline?',
    a: 'No. There is no service worker, no cache, no stored history. Every search is a live request. That is intentional — weather data goes stale fast and faking freshness would be worse than failing.',
  },
  {
    q: 'Can I switch to Fahrenheit?',
    a: 'Not yet. The unit toggle is on the backlog (it is one of the listed open questions in SPEC.md). For now everything is metric.',
  },
  {
    q: 'How accurate is the forecast?',
    a: 'Open-Meteo blends multiple national weather services. For five-day forecasts it is competitive with any free consumer API. The exact source depends on your coordinates.',
  },
  {
    q: 'Can I self-host it?',
    a: 'Yes. Clone the repo, npm install, npm run build, drop the dist folder behind any static host. There is no server, no database, and no environment variables to configure.',
  },
  {
    q: 'Why the terminal aesthetic?',
    a: 'Because the data is a list of numbers and the screen is meant to be glanced at. Monospace, dark background, and uppercase labels are the most legible way to look up one number quickly.',
  },
]

function FAQ() {
  return (
    <section className="section" id="faq">
      <Reveal>
        <div className="section-eyebrow">FAQ</div>
        <h2 className="section-title">
          Questions worth answering before you click.
        </h2>
        <p className="section-lede">
          If your question is not here, the source on GitHub is short enough
          to skim end-to-end in a coffee break.
        </p>
      </Reveal>

      <div className="faq-list">
        {QA.map((item, i) => (
          <Reveal key={item.q} delay={i * 50} as="details" className="faq-item">
            <summary className="faq-summary">
              <span>
                <span className="faq-summary-prompt">?</span>
                {item.q}
              </span>
              <span className="faq-toggle">[+]</span>
            </summary>
            <div className="faq-body">{item.a}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default FAQ
