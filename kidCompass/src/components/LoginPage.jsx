import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function LoginPage({ setUserName }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    if (!name || !password) {
      alert("Please enter name and password");
      return;
    }
    setUserName(name);
    navigate("/browse");
  };
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Name."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <div className="back-link">
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
