import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://ernest-manyama-portifolio.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <p className="text-center mt-5">Loading portfolio...</p>;

  return (
    <div>
      {/* Header */}
      <header
        className="text-white text-center py-5 mb-4"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x400/?software,developer,technology')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Gradient overlay */}
        <div
          className="p-4 rounded"
          style={{
            background: "linear-gradient(135deg, rgba(0,123,255,0.85), rgba(0,200,150,0.85))"
          }}
        >
          <h1 className="display-4 fw-bold">{portfolio.name}</h1>
          <p className="lead">{portfolio.about}</p>
        </div>
      </header>

      <div className="container mt-4">
        {/* Skills */}
        <section className="mb-4">
          <h3>Skills</h3>
          {portfolio.skills.map((skill, i) => (
            <span key={i} className="badge bg-success me-2">{skill}</span>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h3>Projects</h3>
          <div className="row">
            {portfolio.projects.map((p, i) => (
              <div key={i} className="col-md-6 mb-3">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">{p.description}</p>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-4">
          <h3>Contact</h3>
          <p>📧 {portfolio.contact.email}</p>
          <p>📞 {portfolio.contact["Phone Number"]}</p>
          <p>🔗 <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p>💻 <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </section>
      </div>
    </div>
  );
}
