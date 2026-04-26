import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHover(true)
    }
    const out = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHover(false)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.body.style.cursor = 'auto'
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: pos.x, y: pos.y, scale: hover ? 0 : 1 }}
        transition={{ type: 'spring', damping: 30, stiffness: 800, mass: 0.3 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{ x: pos.x, y: pos.y, scale: hover ? 1.8 : 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
      />
      <style>{`
        .cursor-dot, .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }
        .cursor-dot {
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          margin-left: -3px;
          margin-top: -3px;
        }
        .cursor-ring {
          width: 32px;
          height: 32px;
          border: 1px solid white;
          border-radius: 50%;
          margin-left: -16px;
          margin-top: -16px;
        }
        @media (pointer: coarse) {
          .cursor-dot, .cursor-ring { display: none; }
        }
      `}</style>
    </>
  )
}
