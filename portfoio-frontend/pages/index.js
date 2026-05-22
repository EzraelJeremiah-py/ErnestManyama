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
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white py-10 text-center shadow">
        <h1 className="text-3xl font-bold">{portfolio.name}</h1>
        <p className="mt-2 text-lg">{portfolio.about}</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold border-b-2 border-blue-900 pb-2 mb-4">Skills</h2>
          <p className="text-gray-700">{portfolio.skills.join(" • ")}</p>
        </section>

        {/* Projects with dropdown */}
        <section>
          <h2 className="text-2xl font-semibold border-b-2 border-blue-900 pb-2 mb-4">Projects</h2>
          <div className="space-y-4">
            {portfolio.projects.map((proj, i) => (
              <div key={i} className="border-b pb-2">
                <button
                  onClick={() => setOpenProject(openProject === i ? null : i)}
                  className="w-full text-left text-xl font-bold text-blue-900 focus:outline-none"
                >
                  {proj.title}
                </button>
                {openProject === i && (
                  <p className="mt-2 text-gray-700">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold border-b-2 border-blue-900 pb-2 mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Email: {portfolio.contact.email}</li>
            <li>GitHub: {portfolio.contact.github}</li>
            <li>LinkedIn: {portfolio.contact.linkedin}</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4">
        <p>© {new Date().getFullYear()} {portfolio.name} Portfolio | All Rights Reserved</p>
      </footer>
    </div>
  );
}
