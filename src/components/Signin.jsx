import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert("You entered wrong email / password");
    }
  };

  return (
    <div className="loginpage">
      <div className="form">
        <form className="loginform" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email *"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password *"
            required
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/*{<b className="errormessage">{error}</b>}*/}
          <button type="submit">login</button>
          <p className="message">
            Not registered? <Link to="/signup"> Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signin;
