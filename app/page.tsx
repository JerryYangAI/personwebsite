import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Beliefs from '../components/Beliefs'
import Projects from '../components/Projects'
import FeaturedReading from '../components/FeaturedReading'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Beliefs />
      <Projects />
      <FeaturedReading />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
