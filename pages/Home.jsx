import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  useEffect(() => { document.title = "EcoLearn - Home"; }, []);
  return (
    <section className="home-hero">
      <div className="container hero-content">
        <h1>Learn to Live Sustainably</h1>
        <p>Interactive lessons, hands-on projects, and resources to build eco-friendly habits.</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => nav("/lessons")}>Start Learning</button>
          <button className="btn btn-secondary" onClick={() => nav("/projects")}>View Projects</button>
        </div>
      </div>
      <div className="features container">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Renewable Energy</h3>
          <p>Solar, wind, and hydro basics with interactive demos.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">♻️</div>
          <h3>Waste Reduction</h3>
          <p>Practical tips to reduce and reuse at home and school.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌱</div>
          <h3>Eco Lifestyle</h3>
          <p>Small daily choices that add up to big impact.</p>
        </div>
      </div>
    </section>
  );
}
