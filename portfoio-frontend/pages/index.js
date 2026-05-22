// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    fetch("https://ernestmanyama.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  if (!portfolio) {
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  }

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 text-white py-12 text-center shadow-lg">
        <h1 className="text-4xl font-bold tracking-wide">{portfolio.name}</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">{portfolio.about}</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-8 py-14 space-y-14">
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 border-b-2 border-blue-800 pb-2 mb-6">Skills</h2>
          <p className="text-gray-700 text-lg">{portfolio.skills.join(" • ")}</p>
        </section>

        {/* Projects with dropdown */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 border-b-2 border-blue-800 pb-2 mb-6">Projects</h2>
          <div className="space-y-6">
            {portfolio.projects.map((proj, i) => (
              <div key={i} className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
                <button
                  onClick={() => setOpenProject(openProject === i ? null : i)}
                  className="w-full text-left text-xl font-bold text-blue-700 focus:outline-none"
                >
                  {proj.title}
                </button>
                {openProject === i && (
                  <p className="mt-3 text-gray-700">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 border-b-2 border-blue-800 pb-2 mb-6">Contact</h2>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li>Email: {portfolio.contact.email}</li>
            <li>GitHub: {portfolio.contact.github}</li>
            <li>LinkedIn: {portfolio.contact.linkedin}</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-6 mt-10">
        <p className="text-sm">© {new Date().getFullYear()} {portfolio.name} Portfolio | All Rights Reserved</p>
      </footer>
    </div>
  );
}
