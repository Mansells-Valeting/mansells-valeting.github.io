import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/components'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 no-underline">
            <img
               src="/logo.png"
               alt="Mansell's Valeting"
               className="w-8 h-8 object-contain"
              />
            <span className={`font-display text-xl font-extralight tracking-wide transition-colors ${scrolled ? 'text-text' : 'text-white'}`}>
              Mansell&apos;s Valeting
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors no-underline ${
                  scrolled ? 'text-text-secondary hover:text-text' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:07720175330" className={`text-sm font-medium no-underline ${
              scrolled ? 'text-brand-400' : 'text-white/80'
            }`}>
              07720 175330
            </a>
            <Button href="#booking" variant={scrolled ? 'primary' : 'secondary'}>
              Book now
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className={`block h-0.5 w-5 rounded-full transition-colors ${scrolled ? 'bg-text' : 'bg-white'}`}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block h-0.5 w-5 rounded-full transition-colors ${scrolled ? 'bg-text' : 'bg-white'}`}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className={`block h-0.5 w-5 rounded-full transition-colors ${scrolled ? 'bg-text' : 'bg-white'}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-text-secondary hover:text-text no-underline py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col">
                <a href="tel:07720175330" className="text-base font-medium text-brand-400 no-underline py-1">
                  07720 175330
                </a>
              </div>
              <Button href="#booking" variant="primary" className="w-full">
                Book now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
