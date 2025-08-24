import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Beliefs from '../components/Beliefs'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Beliefs />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
