function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="nav-logo-prompt">&gt;</span>
          WEATHER
          <span className="nav-logo-slash">//</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#demo">Demo</a>
          <a href="#faq">FAQ</a>
          <a
            href="https://github.com/wiktorpoczatek/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </div>
        <a href="#app" className="btn btn-primary">
          Launch app
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  )
}

export default Nav
