import { motion } from 'framer-motion'
import { Button } from './ui/components'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-brand">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-brand-300/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[2px] h-96 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-1/4 left-1/3 w-[1px] h-64 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <svg className="absolute right-0 bottom-0 w-96 h-96 opacity-[0.04]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M100 5 C100 5 10 65 10 100 C10 135 50 160 100 160 C150 160 190 135 190 100 C190 65 100 5 100 5Z" fill="white"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-tight text-white mb-6"
          >
            Valeting{' '}
            <span className="text-gradient-white">at your convenience.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10"
          >
            Expert interior, exterior and full valet services, right here in Devon. We come to your home or workplace — so you can get on with your day while we make your car sparkle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#booking" variant="accent" className="text-base px-8 py-4">
              Book your valet
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-brand-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                  {['JM', 'ST', 'DR', 'EW'][i - 1]}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-0.5 text-accent text-sm">★★★★★</div>
              <span className="text-white/60 text-xs">Trusted by local drivers</span>
            </div>
            <span className="text-white/20 hidden sm:block">|</span>
            <div className="text-white/80 text-sm">
              <span className="font-semibold text-white">500+</span>{' '}
              <span className="text-white/50">cars valeted across Devon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
