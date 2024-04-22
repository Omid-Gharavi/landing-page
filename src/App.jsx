import './App.css'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Testemonials from './components/testemonials/Testemonials'

function App() {

  return (
    <>
      <div className='bg-[#FFD4D0] min-h-[683px] max-2xl:min-h-[680.99px]'>
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
      <Blog />
    </>
  )
}

export default App
