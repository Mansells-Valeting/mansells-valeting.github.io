import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data/content'
import { SectionHeading } from './ui/components'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
      >
        <span className="text-sm md:text-base font-medium text-text">{question}</span>
        <motion.svg
          animate={{ rotate: open ? 45 : 0 }}
          className="w-4 h-4 text-text-secondary shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-text-secondary leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-surface-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before booking."
        />

        <div className="bg-white rounded-2xl px-6 md:px-8 border border-border/60">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-text-secondary">
            Still have questions?{' '}
            <a href="tel:07720175330" className="text-brand-400 font-semibold hover:text-brand-500 no-underline">
              Call 07720 175330
            </a>{' '}
            <span className="text-text-secondary">or email{' '}</span>
            <a href="mailto:mansellsvaleting@outlook.com" className="text-brand-400 font-semibold hover:text-brand-500 no-underline">
              mansellsvaleting@outlook.com.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
