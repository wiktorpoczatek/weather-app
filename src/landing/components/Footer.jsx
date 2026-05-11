function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-line">
          <span style={{ color: 'var(--color-tertiary)' }}>&gt;</span>{' '}
          Built with{' '}
          <a href="https://react.dev" target="_blank" rel="noreferrer">React</a>{' '}
          and{' '}
          <a href="https://vite.dev" target="_blank" rel="noreferrer">Vite</a>{' '}
          &middot; Data by{' '}
          <a href="https://open-meteo.com" target="_blank" rel="noreferrer">
            Open-Meteo
          </a>{' '}
          &middot; Deployed on{' '}
          <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>
        </div>
        <div className="footer-right">
          <a
            href="https://github.com/wiktorpoczatek/weather-app"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
          >
            GITHUB&nbsp;→
          </a>
          <span>MIT 2026</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
