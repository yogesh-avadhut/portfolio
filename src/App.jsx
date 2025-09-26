import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education  from './components/Education'
import Footer  from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <AboutMe/>
     <Skills />
     <Projects/>
     <Education />
     <Footer />
    </>
  )
}

export default App
