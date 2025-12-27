import React from 'react'

export default function Header(){
  

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:supports-[backdrop-filter]:bg-slate-950/60 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-fuchsia-500 to-rose-500 text-white shadow-soft">SG</span>
          <span className="font-semibold group-hover:text-brand-600">Sameer Gedam</span>
        </a>
        <div className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-brand-600 navlink">About</a>
          <a href="#skills" className="hover:text-brand-600 navlink">Skills</a>
          <a href="#projects" className="hover:text-brand-600 navlink">Projects</a>
          <a href="#experience" className="hover:text-brand-600 navlink">Experience</a>
          <a href="#education" className="hover:text-brand-600 navlink">Education</a>
          <a href="#contact" className="hover:text-brand-600 navlink">Contact</a>
          <a href="/resume.pdf" download="./resume.pdf" className="px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-700 shadow-soft">Download CV</a>
        </div>
      </nav>
      <div id="mobileMenu" className="md:hidden hidden border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
          <a href="#about" className="hover:text-brand-600">About</a>
          <a href="#skills" className="hover:text-brand-600">Skills</a>
          <a href="#projects" className="hover:text-brand-600">Projects</a>
          <a href="#experience" className="hover:text-brand-600">Experience</a>
          <a href="#education" className="hover:text-brand-600">Education</a>
          <a href="#contact" className="hover:text-brand-600">Contact</a>
          <a href="./resume.pdf" download="./resume.pdf" className="px-3 py-2 text-center rounded-lg bg-brand-600 text-white hover:bg-brand-700">Download CV</a>
        </div>
      </div>
    </header>
  )
}
