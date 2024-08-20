import './App.css'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import StarsCanvas from './components/StartBackground'

function App() {

  return (
    <>
      <StarsCanvas />
      <Navbar />
      <div className='flex flex-col gap-20'>
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  )
}

export default App
