import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();

  if (token) {
    return (
      <header>
        <nav>
          <div className="nav-left">
            <NavLink to="/">Find My Recipe</NavLink>
          </div>
          <div className="nav-right">
            <NavLink to="/account">Account</NavLink>
            <NavLink to="/login" onClick={logout}>
              Logout
            </NavLink>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav>
          <div className="nav-left">
            <NavLink to="/">Find My Recipe</NavLink>
          </div>
          <div className="nav-right">
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/recipes">Recipes(betaLink)</NavLink>
          </div>
        </nav>
      </header>
    );
  }
}
