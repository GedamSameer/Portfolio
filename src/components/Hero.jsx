import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-brand-400/40 rounded-full blob" />
        <div className="absolute top-24 -right-24 h-96 w-96 bg-fuchsia-400/40 rounded-full blob" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 bg-rose-400/40 rounded-full blob" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-brand-50 dark:bg-slate-900 border border-brand-100 dark:border-slate-800">💼 Full‑Stack Developer • MERN</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Sameer</span>.
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              I build reliable, user‑friendly web apps with <strong>React</strong>, <strong>Node</strong>, <strong>Express</strong>, <strong>MongoDB/SQL</strong> and modern tooling. I previously supported and enhanced 20+ enterprise apps at Cognizant, handling incident & change management end‑to‑end.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 shadow-soft">View Projects</a>
              <a href="#contact" className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-brand-600">Contact Me</a>
              <a href="https://github.com/GedamSameer" target="_blank" className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700">GitHub ↗</a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div><dt className="text-slate-500">Experience</dt><dd className="font-semibold">2.5+ yrs</dd></div>
              <div><dt className="text-slate-500">Location</dt><dd className="font-semibold">Chandrapur, IN</dd></div>
              <div><dt className="text-slate-500">Focus</dt><dd className="font-semibold">MERN • DSA</dd></div>
            </dl>
          </div>
          <div className="relative">
            <div className="w-full max-w-xs mx-auto rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-2 shadow-soft">
              <img     alt="Sameer Gedam profile"    src="/profile.jpg"    className="w-full h-auto object-contain rounded-xl"  />
            </div>
           <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 shadow-soft text-sm text-center">
              <span className="font-semibold">Open to work</span>
              <div className="text-slate-500">SDE-1 • Full-Stack / Frontend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
