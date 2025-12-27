import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-16 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Full‑Stack Developer with hands‑on experience in support & maintenance at Cognizant (Nov 2021 – Apr 2024). I focus on building clean UIs, robust APIs, and deployment‑friendly solutions. PGDM‑IT from MIT Pune (Mar 2024); B.E. IT from SIT Lonavala (2021).</p>
          </div>
          <div className="md:col-span-2">
            <ul className="grid sm:grid-cols-2 gap-4">
              <li className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
                <h3 className="font-semibold">What I do</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">React frontends, Node/Express APIs, MongoDB & SQL, auth (JWT), payments (Stripe/Razorpay placeholders), and CI‑friendly deployments (Netlify/Vercel/Render).</p>
              </li>
              <li className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
                <h3 className="font-semibold">How I work</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Bias for clarity, clean code, and observability. I iterate fast with a product mindset and document decisions for future maintainers.</p>
              </li>
              <li className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
                <h3 className="font-semibold">Currently</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Building portfolio projects (NotebookLM‑style PDF chat, ticketing app UI refresh, movies watchlist) and leveling up TypeScript/Node internals.</p>
              </li>
              <li className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50">
                <h3 className="font-semibold">Looking for</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">SDE‑1 roles in product teams (remote or India‑based) where I can own features end‑to‑end.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
