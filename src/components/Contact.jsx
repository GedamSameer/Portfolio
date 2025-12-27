import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">For roles, collaborations, or freelance gigs, drop a message. I usually reply within a day.</p>
            <div className="mt-6 space-y-2 text-sm">
              <div>📍 Chandrapur, Maharashtra, India</div>
              <div>✉️ <a className="underline hover:text-brand-600" href="mailto:samgedam0@gmail.com">samgedam0@gmail.com</a></div>
              <div>🔗 <a className="underline hover:text-brand-600" href="https://github.com/GedamSameer" target="_blank">GitHub</a> • <a className="underline hover:text-brand-600" href="https://www.linkedin.com/in/sameer-gedam/" target="_blank">LinkedIn</a></div>
            </div>
          </div>
          <form name="contact" method="POST" data-netlify="true" className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 shadow-soft">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm" htmlFor="name">Name</label>
                <input id="name" name="name" required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent" />
              </div>
              <div>
                <label className="text-sm" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent"></textarea>
              </div>
            </div>
            <button className="mt-4 w-full sm:w-auto px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
