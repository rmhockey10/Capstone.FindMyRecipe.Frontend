import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <section className="RegisterLogin">
        <h1>Register</h1>
        <form className="RegisterLoginForm" action={onRegister}>
          <label>
            Username
            <input type="text" name="username" />
          </label>
          <label>
            Password
            <input type="password" name="password" required />
          </label>
          <button className="RegisterLoginButton">Register</button>
          {error && <output>{error}</output>}
        </form>
        <Link to="/login">Already have an account? Log in here.</Link>
      </section>
    </>
  );
}
