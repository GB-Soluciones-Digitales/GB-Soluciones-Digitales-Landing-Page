import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
