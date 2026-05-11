import { useEffect, useState } from 'react'
import LandingPage from './landing/LandingPage'
import WeatherApp from './WeatherApp'

function getRoute() {
  return typeof window !== 'undefined' && window.location.hash === '#app'
    ? 'app'
    : 'landing'
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    function onChange() {
      const next = getRoute()
      setRoute(prev => {
        if (prev !== next) window.scrollTo({ top: 0, behavior: 'instant' })
        return next
      })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route === 'app' ? <WeatherApp /> : <LandingPage />
}

export default App
