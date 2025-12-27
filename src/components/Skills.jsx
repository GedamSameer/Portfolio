import React from 'react'

export default function Skills(){
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
            <h3 className="font-semibold">Frontend</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">HTML/CSS</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">JavaScript</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 ">React</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">Redux</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">Tailwind</span>
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
            <h3 className="font-semibold">Backend</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">Node.js</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">ExpressJs</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">MongoDB/Mongoose</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">SQL/MySQL</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">REST APIs</span>
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
            <h3 className="font-semibold">Tools & Practices</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">Git/GitHub</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">Postman/Swagger</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">Netlify/Vercel</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">Stripe/Razorpay</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">VS/VS Code</span>
              <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">DSA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
