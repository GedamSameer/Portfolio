import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Experience</h2>
        <ol className="mt-6 relative">
          {/* Cognizant Experience */}
          <li className="relative pl-8 py-6 border-l border-slate-200 dark:border-slate-800">
            <span className="absolute -left-[9px] top-9 h-4 w-4 rounded-full bg-brand-600"></span>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-lg">
                Associate - FullStack Engineer
              </h3>
              <span className="text-sm text-slate-500">Nov 2021 – Mar 2024</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Cognizant • Pune, India
            </p>

            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                Acted as <strong>Subject Matter Expert (SME)</strong> for 20+ enterprise applications, ensuring stability and issue resolution, which enhanced overall system reliability.
              </li>
              <li>
                Streamlined onboarding by creating and maintaining <strong>Confluence documentation</strong> for all supported apps, reducing training time by <strong>30%</strong> for future SMEs.
              </li>
              <li>
                Led client communications for decommissioning unused applications, optimizing resource usage and reducing avoidable costs by <strong>15%</strong>.
              </li>
              <li>
                Implemented application enhancements via <strong>ServiceNow</strong>, decreasing recurring incidents by <strong>25–30%</strong> and improving overall system performance.
              </li>
              <li>
                Managed over <strong>50 application changes</strong> and resolved <strong>1000+ incidents</strong> in 2 years, showcasing strong ownership and consistency under pressure.
              </li>
              <li>
                Executed application updates during non-business hours, ensuring <strong>zero downtime</strong> and uninterrupted service for clients.
              </li>
              <li>
                Diagnosed and resolved issues in <strong>Leapwork (RPA)</strong> automated monitoring flows, saving <strong>2–3 hours daily</strong> in manual monitoring efforts.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
