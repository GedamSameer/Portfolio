import React from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 border-t border-slate-200/60 dark:border-slate-800/60 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© <span>{year}</span> Sameer Gedam. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-brand-600">Top ↑</a>
          <a href="./resume.pdf" download="./resume.pdf" className="hover:text-brand-600">Resume</a>
        </div>
      </div>
    </footer>
  )
}
