import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { FAQ } from './components/FAQ'
import { Booking } from './components/Booking'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
