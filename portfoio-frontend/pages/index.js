// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://ernestmanyama.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  if (!portfolio) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;
  }

  return (
    <div style={{
      fontFamily: "Segoe UI, Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#222",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: "#004080",
        color: "white",
        padding: "2rem",
        textAlign: "center"
      }}>
        <h1 style={{ margin: 0 }}>{portfolio.name}</h1>
        <p style={{ margin: "0.5rem 0 0", fontSize: "1.1rem" }}>{portfolio.about}</p>
      </header>

      {/* Main Content */}
      <main style={{ flex: "1", padding: "3rem", maxWidth: "900px", margin: "0 auto" }}>
        {/* Skills */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ borderBottom: "2px solid #004080", paddingBottom: "0.5rem" }}>Skills</h2>
          <p>{portfolio.skills.join(" • ")}</p>
        </section>

        {/* Projects */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ borderBottom: "2px solid #004080", paddingBottom: "0.5rem" }}>Projects</h2>
          {portfolio.projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ margin: "0 0 0.3rem", color: "#004080" }}>{proj.title}</h3>
              <p style={{ margin: "0.2rem 0" }}>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc" }}>
                View Project →
              </a>
            </div>
          ))}
        </section>

        {/* Contact */}
        <section>
          <h2 style={{ borderBottom: "2px solid #004080", paddingBottom: "0.5rem" }}>Contact</h2>
          <p>Email: <a href={`mailto:${portfolio.contact.email}`} style={{ color: "#0066cc" }}>{portfolio.contact.email}</a></p>
          <p>GitHub: <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc" }}>Profile</a></p>
          <p>LinkedIn: <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc" }}>Profile</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#004080",
        color: "white",
        textAlign: "center",
        padding: "1rem"
      }}>
        <p>© {new Date().getFullYear()} {portfolio.name} Portfolio | All Rights Reserved</p>
      </footer>
    </div>
  );
}
