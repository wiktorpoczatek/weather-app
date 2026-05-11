import { useEffect, useRef, useState } from 'react'

function Reveal({ children, delay = 0, as = 'div', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
            break
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  const Tag = as
  const style = delay ? { transitionDelay: `${delay}ms`, ...rest.style } : rest.style

  return (
    <Tag
      ref={ref}
      {...rest}
      style={style}
      className={`reveal-on-scroll ${visible ? 'in-view' : ''}${rest.className ? ` ${rest.className}` : ''}`}
    >
      {children}
    </Tag>
  )
}

export default Reveal
