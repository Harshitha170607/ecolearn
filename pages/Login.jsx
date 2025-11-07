import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("student");
  const { login } = useAuth();
  const nav = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (!email) return alert("Enter email");
    login(email, type);
    nav("/profile");
  };
  return (
    <section>
      <div className="container auth-card">
        <h2>Login / Register</h2>
        <form onSubmit={submit} className="auth-form">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          <label>Role</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Administrator</option>
          </select>
          <button className="btn btn-primary" type="submit">Continue</button>
        </form>
      </div>
    </section>
  );
}
