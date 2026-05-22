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

  if (!portfolio) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;

  return (
    <div style={{ fontFamily: "Segoe UI, Arial, sans-serif", backgroundColor: "white", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ backgroundColor: "silver", padding: "2rem", textAlign: "center" }}>
        <h1>{portfolio.name}</h1>
        <h2 style={{ fontWeight: "normal" }}>{portfolio.about}</h2>
      </header>

      <main style={{ flex: "1", padding: "2rem", maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
        <div style={{ backgroundColor: "#111", color: "gold", padding: "1.5rem", borderRadius: "8px" }}>
          <h3 style={{ color: "cyan" }}>Skills</h3>
          <ul>{portfolio.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>

        <div style={{ backgroundColor: "#111", color: "gold", padding: "1.5rem", borderRadius: "8px" }}>
          <h3 style={{ color: "cyan" }}>Projects</h3>
          <ul>
            {portfolio.projects.map((p, i) => (
              <li key={i}>
                <strong>{p.title}</strong>: {p.description}{" "}
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: "cyan" }}>View</a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ backgroundColor: "#111", color: "gold", padding: "1.5rem", borderRadius: "8px" }}>
          <h3 style={{ color: "white" }}>Contact</h3>
          <p>Email: {portfolio.contact.email}</p>
          <p>GitHub: <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer" style={{ color: "cyan" }}>Profile</a></p>
          <p>LinkedIn: <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "cyan" }}>Profile</a></p>
        </div>
      </main>

      <footer style={{ backgroundColor: "#333", color: "gold", textAlign: "center", padding: "1rem" }}>
        <p>© {new Date().getFullYear()} {portfolio.name} Portfolio | All Rights Reserved</p>
      </footer>
    </div>
  );
}
