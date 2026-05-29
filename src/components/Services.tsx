import { motion } from 'framer-motion'
import { services } from '../data/content'
import { SectionHeading } from './ui/components'
import { StaggerContainer, StaggerItem, ParallaxTilt } from './ui/motion'

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What we offer"
          title="Our valeting services"
          description="From a quick interior refresh to a full showroom transformation — we have the perfect package for your car. Serving all areas across Devon."
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <ParallaxTilt className="h-full">
                <div className="group relative h-full bg-white rounded-2xl p-6 md:p-8 border border-border/60 hover:border-brand-200/60 transition-all duration-300 hover:shadow-xl hover:shadow-brand-400/5">
                  {service.popular && (
                    <div className="absolute -top-3 right-6">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold gradient-accent text-brand-900 shadow-lg">
                        Most popular
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">{service.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="w-4 h-4 text-brand-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-2xl font-bold text-brand-400">{service.price}</span>
                    <a href="#booking" className="text-sm font-semibold text-brand-400 hover:text-brand-500 transition-colors no-underline">
                      Book now &rarr;
                    </a>
                  </div>
                </div>
              </ParallaxTilt>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
