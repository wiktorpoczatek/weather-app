import { useState, useEffect, useRef } from 'react'
import { searchCities } from '../api/weather'

function SearchBar({ onSelect }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        border: focused ? 'var(--border-accent)' : 'var(--border-default)',
        borderRadius: 'var(--rounded-md)',
        backgroundColor: 'var(--color-neutral)',
        padding: '10px 16px',
        gap: '10px',
      }}>
        <span style={{
          color: 'var(--color-tertiary)',
          fontSize: '0.95rem',
          userSelect: 'none',
          flexShrink: 0,
        }}>{'>'}</span>
        <div style={{ position: 'relative', flex: 1 }}>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onClick={() => setQuery('')}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--color-primary)',
              fontSize: '0.95rem',
              fontFamily: 'inherit',
              caretColor: 'var(--color-tertiary)',
            }}
          />
          {!query && !focused && (
            <span style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              color: 'var(--color-secondary)',
              fontSize: '0.95rem',
              whiteSpace: 'nowrap',
            }}>
              SEARCH FOR A CITY<span className="blink" style={{ color: 'var(--color-tertiary)' }}>_</span>
            </span>
          )}
        </div>
      </div>
      {open && (
        <ul style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          margin: '2px 0 0', padding: 0, listStyle: 'none',
          border: 'var(--border-default)',
          borderRadius: 'var(--rounded-md)',
          backgroundColor: 'var(--color-surface)',
          zIndex: 10,
          overflow: 'hidden',
        }}>
          {results.map((city, i) => (
            <li
              key={city.id}
              onMouseDown={() => handleSelect(city)}
              style={{
                padding: '10px 16px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                color: 'var(--color-primary)',
                borderTop: i > 0 ? 'var(--border-subtle)' : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(63,185,80,0.08)'
                e.currentTarget.style.color = 'var(--color-tertiary)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--color-primary)'
              }}
            >
              <span style={{ color: 'var(--color-tertiary)', marginRight: '8px' }}>{'>'}</span>
              {city.name}{city.admin1 ? `, ${city.admin1}` : ''}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
