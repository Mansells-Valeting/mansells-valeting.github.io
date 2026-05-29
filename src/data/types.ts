export interface Service {
  icon: string
  title: string
  description: string
  price: string
  features: string[]
  popular?: boolean
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  popular?: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface ProcessStep {
  icon: string
  title: string
  description: string
}
