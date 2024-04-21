import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Testemonials from './components/testemonials/Testemonials'

function App() {

  return (
    <>
      <div className='bg-[#FFD4D0] min-h-[683px] max-lg:min-h-[auto]'>
        <div className='mx-[124px] max-lg:mx-4'>
          <Header />
          <Hero />
        </div>
      </div>
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Testemonials />
    </>
  )
}

export default App
