import './App.css'
import AboutMe from './components/AboutMe'
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
      <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    </>
  )
}

export default App
