import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();

  if (token) {
    return (
      <header>
        <nav>
          <NavLink to="/">Find My Recipe</NavLink>
          <NavLink to="/account">Account</NavLink>
          <NavLink to="/login" onClick={logout}>
            Logout
          </NavLink>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav>
          <NavLink to="/">Find My Recipe</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/recipes">Recipes(betaLink)</NavLink>
        </nav>
      </header>
    );
  }
}
