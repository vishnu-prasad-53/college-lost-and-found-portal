import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function SignIn() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      login(email);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="container">
      <h2>Sign In</h2>

      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p>
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;