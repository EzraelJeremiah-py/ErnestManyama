// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const res = await fetch("https://ernestmanyama.onrender.com/api/portfolio");
        const data = await res.json();
        setPortfolio(data);
      } catch (err) {
        console.error("Error fetching portfolio:", err);
      }
    }
    fetchPortfolio();
  }, []);

  if (!portfolio) {
    return <div className="p-8">Loading portfolio...</div>;
  }

  return (
    <div className="bg-gray-100 text-black min-h-screen flex flex-col">
      <header className="p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">{portfolio.name}</h1>
      </header>

      <main className="flex-grow p-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold">About</h2>
          <p>{portfolio.about}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {portfolio.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="space-y-4">
            {portfolio.projects.map((proj, idx) => (
              <div key={idx} className="p-4 border rounded shadow-sm bg-white">
                <h3 className="text-lg font-bold">{proj.title}</h3>
                <p>{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contact</h2>
          <ul>
            <li>Email: <a href={`mailto:${portfolio.contact.email}`} className="text-blue-600">{portfolio.contact.email}</a></li>
            <li>GitHub: <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-600">GitHub Profile</a></li>
            <li>LinkedIn: <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">LinkedIn Profile</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-200 text-center p-4">
        <p className="text-sm">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
