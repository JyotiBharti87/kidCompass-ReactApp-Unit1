import { Link } from "react-router-dom";
import "../App.css";
import Button from "./Button";

function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>

        <div className="auth-row">
          <label>User Name</label>
          <input type="text" placeholder="Enter your User Name" />
        </div>

        <div className="auth-row">
          <label>Password</label>
          <input type="password" placeholder="Enter your Password" />
        </div>

        <div className="auth-actions">
          <Link to="/browse">
            <Button text="Login" className="login-btn" />
          </Link>
        </div>

        <div className="create-account-wrap">
          <Link to="/signup">
            <Button text="Create Account" className="create-btn" />
          </Link>
        </div>

        <div className="logo-footer">🧭 KidCompass</div>
      </div>
    </main>
  );
}

export default LoginPage;
