import React, { useEffect } from 'react'

const TILES = 8 // how many times to repeat the text in each half

function ensureStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById('scroll-velocity-styles')) return
  const style = document.createElement('style')
  style.id = 'scroll-velocity-styles'
  style.innerHTML = `
    .sv-container { width:100%; overflow:hidden; position:relative }
    .sv-row { width:100%; overflow:hidden; display:flex; align-items:center; padding: 0.5rem 0; }
    .sv-track {
      display:flex;
      flex-shrink:0;
      align-items:center;
      white-space:nowrap;
    }
    .sv-item {
      display:inline-flex;
      align-items:center;
      padding: 0 2rem;
      gap: 0;
    }
    .sv-sep {
      opacity: 0.35;
      margin: 0 1rem;
    }
    @keyframes sv-scroll-left  { from { transform: translateX(0) } to { transform: translateX(-50%) } }
    @keyframes sv-scroll-right { from { transform: translateX(-50%) } to { transform: translateX(0) } }
  `
  document.head.appendChild(style)
}

// Renders TILES repetitions with a separator dot between them
function Tiles({ children }) {
  return (
    <>
      {Array.from({ length: TILES }, (_, i) => (
        <span key={i} className="sv-item">
          {children}
          <span className="sv-sep" aria-hidden></span>
        </span>
      ))}
    </>
  )
}

export function ScrollVelocityContainer({ children, className = '' }) {
  useEffect(() => { ensureStyles() }, [])
  return (
    <div className={`sv-container ${className}`.trim()}>
      {children}
    </div>
  )
}

export function ScrollVelocityRow({ children, baseVelocity = 20, direction = 1, className = '' }) {
  const duration = Math.max(6, 200 / Math.max(1, baseVelocity)) // seconds — bigger = slower
  useEffect(() => { ensureStyles() }, [])

  const animationName = direction >= 0 ? 'sv-scroll-left' : 'sv-scroll-right'
  const trackStyle = {
    animation: `${animationName} ${duration}s linear infinite`,
    willChange: 'transform',
  }

  return (
    <div className={`sv-row ${className}`.trim()}>
      {/* Two identical halves: animating -50% seamlessly loops the whole thing */}
      <div style={{ display: 'flex', flexShrink: 0, whiteSpace: 'nowrap', ...trackStyle }}>
        <div className="sv-track" style={{ whiteSpace: 'nowrap' }}><Tiles>{children}</Tiles></div>
        <div className="sv-track" aria-hidden style={{ whiteSpace: 'nowrap' }}><Tiles>{children}</Tiles></div>
      </div>
    </div>
  )
}

export default ScrollVelocityContainer
