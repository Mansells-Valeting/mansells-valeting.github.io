export function Footer() {
  return (
    <footer className="gradient-brand border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 no-underline mb-4">
              <img
               src="/logo.png"
               alt="Mansell's Valeting"
               className="w-8 h-8 object-contain"
              />
              <span className="font-display text-xl font-light tracking-wide text-white">
                Mansell's Valeting
            </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
              Premium mobile car valeting services in Devon. We bring the showroom to your driveway — interior, exterior and full valet packages available.
            </p>
            <div className="flex gap-2">
              <a href="tel:07720175330" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:bg-white/10 transition-colors no-underline" aria-label="Call us">
                📞
              </a>
              <a href="mailto:mansellsvaleting@outlook.com" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:bg-white/10 transition-colors no-underline" aria-label="Email us">
                📧
              </a>
              <a href="https://www.facebook.com/mansellsvaleting/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:bg-white/10 transition-colors no-underline" aria-label="Find us on Facebook">
                <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Find us on Facebook', href: 'https://www.facebook.com/mansellsvaleting/', external: true },
                { label: 'Book now', href: '#booking' },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white no-underline transition-colors"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:07720175330" className="text-sm text-white/50 hover:text-white no-underline transition-colors">
                  07720 175330
                </a>
              </li>
              <li>
                <a href="mailto:mansellsvaleting@outlook.com" className="text-sm text-white/50 hover:text-white no-underline transition-colors">
                  mansellsvaleting@outlook.com
                </a>
              </li>
              <li className="text-sm text-white/50">Available Mon–Fri</li>
              <li className="pt-2">
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Mansell&apos;s Valeting. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Web designed by Raifan22.
          </p>
          <div className="flex gap-4 text-xs text-white/30">
              <span>Serving Devon</span>
              <span>Trusted & reliable</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
