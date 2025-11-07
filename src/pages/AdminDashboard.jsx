import { useAuth } from "../context/AuthContext";
export default function AdminDashboard() {
  const { user } = useAuth();
  if (!user || user.type !== "admin") return <div className="container"><p className="alert">Admin access only.</p></div>;
  return (
    <section>
      <div className="container">
        <h2 className="page-title">Admin Dashboard</h2>
        <div className="stats-grid">
          <div className="stat-card"><div className="stat-number">1247</div><div>Total Users</div></div>
          <div className="stat-card"><div className="stat-number">89</div><div>Active Lessons</div></div>
          <div className="stat-card"><div className="stat-number">156</div><div>Projects</div></div>
          <div className="stat-card"><div className="stat-number">94%</div><div>Engagement</div></div>
        </div>
      </div>
    </section>
  );
}
