import { useState, useEffect, useRef } from 'react'
import { searchCities } from '../api/weather'

function SearchBar({ onSelect }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const justSelected = useRef(false)

  useEffect(() => {
    if (justSelected.current) { justSelected.current = false; return }
    if (query.length < 2) { setResults([]); setOpen(false); return }
    const timer = setTimeout(async () => {
      const cities = await searchCities(query)
      setResults(cities)
      setOpen(cities.length > 0)
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    function handleClick(e) {
      if (!containerRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleSelect(city) {
    justSelected.current = true
    setQuery(`${city.name}, ${city.country}`)
    setResults([])
    setOpen(false)
    onSelect(city)
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', marginBottom: '24px' }}>
      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onClick={() => setQuery('')}
        style={{ width: '100%', padding: '8px 12px', fontSize: '16px', boxSizing: 'border-box' }}
      />
      {open && (
        <ul style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          margin: 0, padding: 0, listStyle: 'none',
          border: '1px solid #ccc', borderTop: 'none',
          background: 'white', zIndex: 10,
        }}>
          {results.map(city => (
            <li
              key={city.id}
              onMouseDown={() => handleSelect(city)}
              style={{ padding: '8px 12px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = '#f0f0f0'}
              onMouseLeave={e => e.currentTarget.style.background = 'white'}
            >
              {city.name}{city.admin1 ? `, ${city.admin1}` : ''}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
