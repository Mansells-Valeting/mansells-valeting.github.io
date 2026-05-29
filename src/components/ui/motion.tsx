import { motion, type Variants } from 'framer-motion'
import { type ReactNode, useRef, useEffect, useState } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
  distance?: number
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  down: {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  left: {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  right: {
    hidden: { x: 40, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
  distance = 40
}: FadeInProps) {
  const v = variants[direction] || variants.up
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={{
        hidden: { ...v.hidden, y: direction === 'up' ? distance : direction === 'down' ? -distance : 0, x: direction === 'left' ? -distance : direction === 'right' ? distance : 0 },
        visible: { ...v.visible, y: 0, x: 0 }
      }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1, once = true }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
      }}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxTilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 8, y: y * -8 })
  }

  const handleLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
    >
      {children}
    </div>
  )
}

export function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}
