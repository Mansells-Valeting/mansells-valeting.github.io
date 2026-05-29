import { SectionHeading, Button } from './ui/components'
import { FadeIn } from './ui/motion'


export function Gallery() {
  const stats = [
    { label: 'Cars valeted', value: '500+' },
    { label: '5-star reviews', value: '50+' },
    { label: 'Serving Devon since', value: '2020' },
    { label: 'Happy customers', value: '400+' },
  ]

  return (
    <section id="gallery" className="py-20 md:py-28 gradient-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚗</div>
                  <p className="text-white/40 text-sm">Before & after gallery coming soon</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl">✨</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-200 mb-3">
                    By the numbers
                  </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance leading-tight text-white mb-6">
                Trusted by drivers all over Devon
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                We&apos;ve built a reputation for quality, reliability, and attention to detail. From tiny city cars, to massive off-roaders, we treat every vehicle like it&apos;s our own.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button href="#booking" variant="accent" className="text-base px-8 py-4">
                Book your valet
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
