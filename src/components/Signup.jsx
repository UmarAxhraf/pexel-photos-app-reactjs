import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
//import { auth } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();

  const handlesubmission = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      //navigate("/account");
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert("Enter proper information / mail / strong password");
    }
  };

  return (
    <div className="loginpage">
      <div className="form">
        <form className="registerform" onSubmit={handlesubmission}>
          {/*<input
            type="text"
            placeholder="Name *"
            required
            onChange={(e) => setName(e.target.value)}
  />*/}
          <input
            type="text"
            placeholder="Email address *"
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
          {/*{<b className="errormessage">{error}</b>} */}
          <button type="submit">create</button>
          <p className="message">
            Already registered? <Link to="/"> Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
