import type { Service, Testimonial, PricingTier, FAQ, ProcessStep } from './types'

export const BUSINESS = {
  name: "Mansell's Valeting",
  shortName: "Mansells Valeting",
  tagline: "Valeting at your convenience.",
  phone1: "07720 175330",
  email: "mansellsvaleting@outlook.com",
  location: "Kingsteignton",
  areaServed: "all areas across Devon",
  founded: 2020,
  carsValeted: 500,
  reviews: 50,
}

export const services: Service[] = [
  {
    icon: '🧹',
    title: 'Interior Clean',
    description: 'Deep vacuum, surface wipe-down, glass clean and dashboard treatment for a fresh cabin feel — perfect for giving your car some TLC.',
    price: '£40',
    features: ['Deep vacuum & carpet clean', 'Dashboard & console treatment', 'Glass cleaning', 'Door panels & trim wipe-down', 'Air freshener finish']
  },
  {
    icon: '💧',
    title: 'Exterior Wash & Polish',
    description: 'Hand wash, wheel clean, tyre dress and restore that showroom shine. From tiny city cars to big off-roaders — we do it all.',
    price: '£50',
    features: ['Premium hand wash', 'Wheel clean & tyre dressing', 'Tar spot removal', 'Machine polish', 'Protectant wax finish']
  },
  {
    icon: '🚗',
    title: 'Full Valet',
    description: 'The complete package — inside and out. We leave your car looking like it just rolled off the forecourt.',
    price: '£90',
    features: ['Interior + Exterior combined', 'Engine bay clean', 'Leather conditioning', 'Carpet shampoo', 'Paint sealant'],
    popular: true
  }
]

export const testimonials: Testimonial[] = [
  {
    name: 'Babs Allen',
    role: 'Totnes',
    content: "What a service! Transforming the interior of my landy from dirty to divine! So pleased with the result, and highly recommend Nigel’s work. Think it looks better now than when it was new!",
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'Newton Abbot',
    content: "We are so pleased with how our driveway has come up. Nigel took great care and did an amazing job! It's like new again. I would highly recommend to anyone wanting their drives or paths to look like new, without having to re brick, slab, etc. Thank you Nigel you've done such an amazing job!",
    rating: 5
  },
  {
    name: 'David Richards',
    role: 'Teignmouth',
    content: "Headlight polishing today in Teignmouth. Really really pleased. Professional, reliable and great value. I would highly recommend. My Beetle will be driving at night with more than candle power to light the way thanks to Nigel. Amazing results the headlights have changed from dull, cloudy and yellow to crystal clear once more. Thank you so much.",
    rating: 5
  },
  {
    name: 'Stephanie Dibble',
    role: 'Yelverton',
    content: "Highly recommend Mansell’s Valeting. He has cleaned our car to perfection. The attention to detail was amazing and we will 100% be using him again for our other car. Our car now looks brand new. Thank you!",
    rating: 5
  }
]

export const faqs: FAQ[] = [
  {
    question: 'Do I need to bring my car to you?',
    answer: `No — we come to you! We operate across ${BUSINESS.areaServed}. We can valet your car at your home or workplace. All we need is reasonable access to water and power.`
  },
  {
    question: 'How long does a valet take?',
    answer: 'An interior or exterior clean takes approximately 1–2 hours. A full valet takes 2–3 hours. Premium detailing may take longer depending on the condition of your car.'
  },
  {
    question: 'What areas do you cover?',
    answer: `We're based in ${BUSINESS.location} and cover ${BUSINESS.areaServed}. Drop us a message to check — we're always happy to travel.`
  },
  {
    question: 'Do I need to be present?',
    answer: "Not at all. Many customers leave their keys with us and go about their day. We'll return your car spotless when we're done."
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfer, cash, and card payments. Full payment is taken on completion of the service.'
  },
  {
    question: 'Can you valet any type of vehicle?',
    answer: "Doesn't matter if you've got a tiny city runaround or a big off-roader that's seen its fair share of mud — we can get it looking like it's straight off the forecourt."
  },
  {
    question: 'Are your products safe for my car?',
    answer: 'Yes. We use only professional-grade products that are safe for all paint types, leather, and fabrics. We never use harsh chemicals.'
  },
  {
    question: 'What if I need to cancel?',
    answer: "We understand plans change, although our £50 deposit is non-refundable."
  }
]

export const process: ProcessStep[] = [
  {
    icon: '📅',
    title: 'Book Online',
    description: 'Choose your service, pick a date and time. Takes under 2 minutes.'
  },
  {
    icon: '📍',
    title: 'We Come to You',
    description: "We arrive at your home or workplace. No need to go anywhere."
  },
  {
    icon: '✨',
    title: 'Enjoy Your Car',
    description: "We get your car looking its absolute best while you get on with your day."
  }
]
