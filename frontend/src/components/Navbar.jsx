import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        {user && <Link to="/add">Add Item</Link>}
        {user && <Link to="/myposts">My Posts</Link>}
      </div>

      <div>
        {!user ? (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={() => {
              logout();
              navigate("/signin");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;