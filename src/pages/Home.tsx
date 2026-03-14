import { Hero } from '../components/sections/Hero'
import { ServicesOverview } from '../components/sections/ServicesOverview'
import { AboutIntro } from '../components/sections/AboutIntro'
import { MobileBanner } from '../components/sections/MobileBanner'

export function Home() {
  return (
    <div className="page-content">
      <Hero />
      <ServicesOverview />
      <AboutIntro />
      <MobileBanner />
    </div>
  )
}

