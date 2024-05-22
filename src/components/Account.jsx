import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const { logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("Yor are logged out.");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="accdiv">
      <button className="lic-button1" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Account;
