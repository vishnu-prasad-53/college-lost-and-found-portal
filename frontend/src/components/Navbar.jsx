import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Item</Link>
      </div>
      <div>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;