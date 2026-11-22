import { useEffect, useRef, useState } from 'react'

// Watches an element and flips `inView` to true the first time it
// enters the viewport. Used for scroll-triggered reveal animations.
// The observer disconnects after the first reveal, so the animation
// runs once and costs nothing afterwards.
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
