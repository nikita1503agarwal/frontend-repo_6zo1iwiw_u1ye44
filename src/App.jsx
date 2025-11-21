import Hero from './components/Hero'
import WhyLearn from './components/WhyLearn'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="text-slate-900 bg-white">
      <Hero />
      <WhyLearn />
      <HowItWorks />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
