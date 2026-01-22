import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        {user && <Link to="/add">Add Item</Link>}
      </div>

      <div>
        {!user ? (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <button className="logout-btn" onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;