import './landing.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsMarquee from './components/StatsMarquee'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Demo from './components/Demo'
import TechStack from './components/TechStack'
import FAQ from './components/FAQ'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

function LandingPage() {
  return (
    <div className="landing-root">
      <div className="landing-bg-grid" aria-hidden="true" />
      <div className="landing-bg-scanlines" aria-hidden="true" />
      <div className="landing-content">
        <Nav />
        <Hero />
        <StatsMarquee />
        <Features />
        <HowItWorks />
        <Demo />
        <TechStack />
        <FAQ />
        <FinalCta />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
