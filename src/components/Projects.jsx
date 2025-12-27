import React, { useState, useCallback, useEffect } from 'react'

const Card = ({ title, desc, tags, img, live, code, onImageClick }) => (
  <article className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 shadow-soft">
    <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
      <img
        alt={title}
        src={img}
        className="max-h-full max-w-full object-contain group-hover:scale-[1.02] transition cursor-pointer"
        onClick={onImageClick}
      />
    </div>
    <div className="p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {tags.map((t) => (
          <span key={t} className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-900">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 text-sm">
        {live && (
          <a
            href={live}
            target="_blank"
            className="px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 shadow-soft"
          >
            Live
          </a>
        )}
        {code && (
          <a
            href={code}
            target="_blank"
            className="px-3 py-1.5 rounded-lg bg-brand-600 text-white"
          >
            Code
          </a>
        )}
      </div>
    </div>
  </article>
)

export default function Projects() {
  const [openProject, setOpenProject] = useState(null)

  const closeModal = useCallback(() => setOpenProject(null), [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeModal()
    if (openProject) {
      window.addEventListener('keydown', onKey)
    }
    return () => window.removeEventListener('keydown', onKey)
  }, [openProject, closeModal])

  const cards = [
    {
      key: 'bookmyshow',
      title: 'PleaseBookMyShow (MERN)',
      desc: 'Multi-role ticketing platform with JWT auth, seat reservation logic, and payment placeholders.',
      tags: ['React', 'Node', 'MongoDB'],
      img: 'bookmyshow.png',
      live: 'https://pleasebookmyshow.netlify.app',
      code: 'https://github.com/GedamSameer/BookMyShow',
      modal: {
        heading: 'PleaseBookMyShow',
        url: 'https://pleasebookmyshow.netlify.app',
        bullets: [
          'Multi-Role Authentication: Implemented JWT-based login for users, admins, and partners with role-specific dashboards.',
          'Real-Time Booking System: Integrated seat reservation logic with RESTful APIs, email confirmations, and dynamic seat availability checks.',
          'Scalable Backend: Built using MVC architecture with Mongoose schemas (User, Theater, Booking) and middleware for rate limiting/input validation.',
          'Redux State Management: Centralized user sessions, booking workflows, and theater/movie data for seamless UI updates.',
          'Responsive UI: Designed interactive pages (home, booking, profile) with reusable React components and CSS styling.',
          'Secure Payments: Laid groundwork for Stripe/Razorpay integration via modular backend routes and frontend components.',
        ],
      },
    },
    {
      key: 'movies',
      title: 'Movies App (React + TMDb)',
      desc: 'Trending lists, genre filters, carousels, and localStorage-backed watchlist.',
      tags: ['React', 'TMDb API', 'Local Storage'],
      img: 'movies.png',
      live: 'https://movies-app-alpha-two.vercel.app/',
      code: 'https://github.com/GedamSameer/moviesApp',
      modal: {
        heading: 'MoviesApp',
        url: 'https://movies-app-alpha-two.vercel.app/',
        bullets: [
          'Developed a single-page React application that allows users to browse, search, and manage a personal movie watchlist using React Router and state management.',
          'Integrated The Movie Database (TMDB) API to fetch trending movies, genre metadata, and dynamically display movie posters with metadata such as ratings and genres.',
          'Implemented carousel-based banners using the react-slick library to enhance the visual appeal and promote featured content on the homepage.',
          'Enabled users to add/remove movies from watchlist with persistence using localStorage, ensuring a seamless experience across sessions.',
          'Created a responsive and interactive movie gallery with hover effects, pagination, and lazy loading for better performance and UX.',
          'Built a filter and search feature in the watchlist to sort movies by genre and rating, and locate specific movies quickly using text input.',
          'Used Tailwind CSS for efficient and responsive UI styling, resulting in a clean, modern design optimized for both desktop and mobile views.',
          'Ensured component-based modular architecture with reusable components like Banner, Header, Movies, and Watchlist.',
        ],
      },
    },
    {
      key: 'weather',
      title: 'Weather Forecast',
      desc: 'Clean daily/hourly forecast with search and background visuals.',
      tags: ['HTML/CSS/JS'],
      img: 'weather.png',
      live: 'https://weather-forecast-wine-kappa.vercel.app/',
      code: 'https://github.com/GedamSameer/WeatherForecast',
      modal: {
        heading: 'WeatherForecastApp',
        url: 'https://weather-forecast-wine-kappa.vercel.app/',
        bullets: [
          'Developed a responsive web application that fetches real-time weather data using the OpenWeatherMap API.',
          'Implemented API integration in JavaScript to dynamically display temperature, humidity, wind speed, and weather conditions for user-specified cities.',
          'Built an intuitive user interface using HTML and styled it with CSS for a clean layout.',
          'Enabled search functionality with event-driven input handling, allowing users to retrieve weather updates by city name.',
          'Handled asynchronous operations using the fetch() API and Promise chaining (.then()) to retrieve and display real-time weather data from an external REST API.',
        ],
      },
    },
    {
      key: 'kanban',
      title: 'Kanban Task Board',
      desc: 'Vanilla JS board with color-coded tickets and local persistence.',
      tags: ['HTML/CSS', 'Vanilla JavaScript'],
      img: 'kanban.png',
      live: 'https://kanban-board-kappa-rose.vercel.app/',
      code: 'https://github.com/GedamSameer/KanbanBoardLocalStorage',
      modal: {
        heading: 'KanbanBoard',
        url: 'https://kanban-board-kappa-rose.vercel.app/',
        bullets: [
          'Developed a Kanban-style task board using HTML, CSS, and vanilla JavaScript, without any external frameworks.',
          'Enabled users to create, edit, and delete tasks with color-coded categorization for visual task grouping.',
          'Implemented persistent storage with localStorage, ensuring task data remains intact across browser sessions.',
          'Designed a clean and responsive UI that allows intuitive interaction and color-based task differentiation.',
          'Followed modular coding practices to maintain a clean codebase and support future scalability.',
        ],
      },
    },
  ]

  return (
    <section id="projects" className="py-16 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">Projects</h2>
          <a href="https://github.com/GedamSameer" target="_blank" className="text-sm hover:text-brand-600">
            See all on GitHub ↗
          </a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Card key={c.key} {...c} onImageClick={() => setOpenProject(c)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {openProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="relative z-10 w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-950 p-6 shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{openProject.modal.heading}</h3>
              <button
                onClick={closeModal}
                className="px-2 py-1 text-sm rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <a
              href={openProject.modal.url}
              target="_blank"
              className="mt-2 inline-block text-brand-600 hover:underline break-all"
            >
              {openProject.modal.url}
            </a>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {openProject.modal.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="mt-6 flex justify-end">
              <button onClick={closeModal} className="px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
