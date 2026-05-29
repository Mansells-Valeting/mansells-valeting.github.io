import { process } from '../data/content'
import { SectionHeading } from './ui/components'
import { FadeIn, StaggerContainer, StaggerItem } from './ui/motion'

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How it works"
          title="Valeting, simplified"
          description="Three easy steps to a cleaner, fresher car — without lifting a finger. Wherever you may be — we come to you."
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {process.map((step, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <div className="relative mb-6 inline-flex">
                  <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center text-2xl shadow-lg shadow-brand-400/20">
                    {step.icon}
                  </div>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-12 h-0.5 bg-border">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2 border-border" />
                    </div>
                  )}
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-50 text-brand-400 text-xs font-bold mb-3">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-brand-400 font-semibold text-sm hover:text-brand-500 transition-colors no-underline"
          >
            Start your booking
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
