// Signup form to collect user and child information
import { Link } from "react-router-dom";
import "../App.css";
import Button from "./Button";

function SignupPage() {
  return (
    <main className="auth-page">
      <div className="signup-card">
        <h2 className="signup-title">Please Fill Out Your Information</h2>

        <input type="text" placeholder="Enter your Full Name" required />
        <input
          type="number"
          placeholder="Enter your Age"
          required
          min="18" //age validation required 18
        />
        <input type="text" placeholder="Enter your Location" required />
        <input
          type="tel"
          placeholder="Enter your Phone Number"
          pattern="[0-9]{10}" // Phone number validation only 10 digits allowed
          maxLength="10"
          required
        />
        <input type="text" placeholder="Enter your Child Name" required />
        <input
          type="number"
          placeholder="Enter your Child Age"
          required
          min="1" //age validation
          max="14"
        />
        <input type="text" placeholder="Enter your Child Hobbies" />
        <textarea placeholder="Optional Notes"></textarea>

        <div className="signup-actions">
          <Link to="/browse">
            <Button text="Sign Up" className="signup-btn" />
          </Link>
        </div>

        <div className="back-link">
          <Link to="/">Back to Login</Link>
        </div>

        <div className="logo-footer">🧭 KidCompass</div>
      </div>
    </main>
  );
}

export default SignupPage;
