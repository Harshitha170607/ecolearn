import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="logo">🌱 EcoLearn</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lessons">Lessons</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
        <div className="user-controls">
          {!user && <button className="btn btn-secondary" onClick={() => nav("/login")}>Login</button>}
          {!user && <button className="btn btn-primary" onClick={() => nav("/login")}>Register</button>}
          {user && <span className="user-greet">Hi, {user.name}</span>}
          {user && user.type === "admin" && <button className="btn btn-primary" onClick={() => nav("/admin")}>Admin</button>}
          {user && <button className="btn btn-secondary" onClick={() => { logout(); nav("/"); }}>Logout</button>}
        </div>
      </div>
    </header>
  );
}
