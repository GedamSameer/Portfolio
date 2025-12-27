import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 border-t border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          
          {/* BE */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 shadow-soft">
            <h3 className="font-semibold text-lg">BE - Information Technology</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">SIT, Lonavala</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Savitribai Phule Pune University
            </p>
            <p className="text-sm text-slate-500 mt-1">Jul 2021</p>
          </div>
          {/* PGDM */}
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 shadow-soft">
            <h3 className="font-semibold text-lg">PGDM - Information Technology</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">MITSDE, Pune</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Savitribai Phule Pune University
            </p>
            <p className="text-sm text-slate-500 mt-1">Mar 2024</p>
          </div>

        </div>
      </div>
    </section>
  );
}
