import React, { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120
      const ids = ['about','skills','projects','experience','education','contact']
      const current = ids.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        return y >= el.offsetTop && y < el.offsetTop + el.offsetHeight
      })
      document.querySelectorAll('.navlink').forEach(a => {
        a.classList.toggle('active-link', a.getAttribute('href') === '#' + current)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
