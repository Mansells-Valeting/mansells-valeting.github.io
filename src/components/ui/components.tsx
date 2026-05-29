import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer no-underline border'

const variants = {
  primary: `${base} bg-brand-400 text-white hover:bg-brand-500 border-transparent shadow-lg shadow-brand-400/25 hover:shadow-brand-400/40`,
  accent: `${base} bg-accent text-brand-900 hover:bg-accent-dark border-transparent shadow-lg shadow-accent/25`,
  secondary: `${base} bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20`,
  ghost: `${base} bg-transparent text-brand-400 hover:bg-brand-50 border border-brand-200`
}

export function Button({ children, variant = 'primary', href, onClick, className = '', type }: ButtonProps) {
  const cls = `${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type ?? 'button'} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({ label, title, description, align = 'center', className = '' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 md:mb-16 ${className}`}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-400 mb-3">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance leading-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

interface RatingProps {
  rating: number
  size?: 'sm' | 'md'
}

export function StarRating({ rating, size = 'sm' }: RatingProps) {
  return (
    <div className={`flex gap-0.5 ${size === 'sm' ? 'text-sm' : 'text-lg'}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-accent' : 'text-gray-200'}>★</span>
      ))}
    </div>
  )
}
