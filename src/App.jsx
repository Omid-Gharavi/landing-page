import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'

function App() {

  return (
    <>
      <div className='mx-[124px] max-lg:mx-4'>
        <Header />
        <Hero />
      </div>
      <About />
      <Services />
    </>
  )
}

export default App
