import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  // Stagger cards by passing index * 90 here.
  delay?: number
  className?: string
}

// Fades and slides its content up when it scrolls into view.
// The actual styles live in index.css (.reveal / .reveal-visible),
// including the prefers-reduced-motion fallback that shows content
// instantly for users who ask for less animation.
function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal
