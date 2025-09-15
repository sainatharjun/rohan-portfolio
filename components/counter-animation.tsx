"use client"

import { useEffect, useRef, useState } from "react"

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function CounterAnimation({ end, duration = 2000, suffix = "", className = "" }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * end))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, isVisible])

  return (
    <span ref={ref} className={`animate-count-up ${className}`}>
      {count}
      {suffix}
    </span>
  )
}
