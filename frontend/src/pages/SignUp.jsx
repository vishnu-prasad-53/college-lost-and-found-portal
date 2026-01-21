import { useState } from "react";

function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully (demo)");
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;