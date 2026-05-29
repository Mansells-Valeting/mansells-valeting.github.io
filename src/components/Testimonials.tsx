import { testimonials } from '../data/content'
import { SectionHeading, StarRating } from './ui/components'
import { StaggerContainer, StaggerItem } from './ui/motion'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Social proof"
          title="What our customers say"
          description="Don't just take our word for it — here's what local drivers have to say."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-2xl p-6 border border-border/60 h-full flex flex-col">
                <StarRating rating={t.rating} />
                <p className="mt-4 text-sm text-text-secondary leading-relaxed flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-bold">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text">{t.name}</div>
                      <div className="text-xs text-text-secondary">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-border/60 text-sm text-text-secondary">
            <span className="text-accent">★★★★★</span>
            <span className="font-semibold text-text">4.9</span>
            <span>average rating from our customers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
