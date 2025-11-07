import { useAuth } from "../context/AuthContext";
export default function Profile() {
  const { user } = useAuth();
  return (
    <section>
      <div className="container">
        <h2 className="page-title">Profile</h2>
        {user ? (
          <div className="profile-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.type}</p>
          </div>
        ) : (
          <p>Please login to see your profile.</p>
        )}
      </div>
    </section>
  );
}
