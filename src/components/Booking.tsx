import { SectionHeading } from './ui/components'
import { FadeIn } from './ui/motion'

export function Booking() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-surface-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Book now"
          title="Ready to make your car shine?"
          description="Book your valet in under 2 minutes. Choose your service, pick a time, and we'll take care of the rest."
        />

        <FadeIn>
          <div className="bg-white rounded-2xl border border-border/60 overflow-hidden shadow-xl shadow-brand-400/5">
            <div className="p-1">
              <iframe
                src="https://tally.so/embed/q4JX08?alignLeft=1&hideTitle=1&transparentBackground=1"
                loading="lazy"
                width="100%"
                height="720"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Booking Form"
                className="rounded-xl"
              />
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { icon: '📍', title: 'Based in Kingsteignton', desc: 'Serving all of South Devon' },
            { icon: '📞', title: 'Call us', desc: '07720 175330' },
            { icon: '💳', title: 'Secure payment', desc: 'Pay on completion' },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-4 border border-border/60 flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-text">{item.title}</div>
                  <div className="text-xs text-text-secondary">{item.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
