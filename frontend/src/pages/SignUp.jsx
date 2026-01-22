import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>

      <form onSubmit={submit}>
        <input placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>

      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;