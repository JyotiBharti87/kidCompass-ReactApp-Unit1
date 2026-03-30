import { Link } from "react-router-dom";
import "../App.css";

function SignupPage() {
  return (
    <main className="auth-page">
      <div className="signup-card">
        <h2 className="signup-title">Please Fill Out Your Information</h2>

        <input type="text" placeholder="Enter your Full Name" />
        <input type="number" placeholder="Enter your Age" />
        <input type="text" placeholder="Enter your Location" />
        <input type="text" placeholder="Enter your Phone Number" />
        <input type="text" placeholder="Enter your Child Name" />
        <input type="number" placeholder="Enter your Child Age" />
        <input type="text" placeholder="Enter your Child Hobbies" />
        <textarea placeholder="Optional Notes"></textarea>

        <div className="signup-actions">
          <Link to="/browse">
            <button className="signup-btn">Sign Up</button>
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
