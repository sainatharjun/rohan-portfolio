"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ViewportAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ViewportAnimation({ children, className = "", delay = 0 }: ViewportAnimationProps) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsInView(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`fade-in-viewport ${isInView ? "in-view" : ""} ${className}`}>
      {children}
    </div>
  )
}
