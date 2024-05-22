import React, { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDown } from "react-icons/ai";
import { GiRamProfile } from "react-icons/gi";
import { Link } from "react-router-dom";
import Account from "./Account";
//import Notification from "./Notification";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <div className="headerbar">
        <Link to="/home">
          <h1 className="logo">
            <GiRamProfile /> Pexels
          </h1>
        </Link>
        <ul className="slidermenu">
          <li className="dropdownh" onClick={handleOpen}>
            Explore <AiOutlineDown />
            {open ? (
              <ul className="menuh">
                <li>
                  <button>Discover Photos</button>
                </li>
                <li>
                  <button>Popular Searches</button>
                </li>
                <li>
                  <button>Leaderboard</button>
                </li>
                <li>
                  <button>Pexels Blog</button>
                </li>
              </ul>
            ) : null}
          </li>
          <Link to="/licence">
            <li className="licence">Licence</li>
          </Link>
          {/*<li>Licence</li>*/}
          <Link to="/notification">
            <li className="notificon">
              <BsBellFill />
              <span className="notif-badge">➍</span>
            </li>
          </Link>
          <li className="profilec">
            <CgProfile />
          </li>
          {/* <button className="button1">Upload</button> */}
          <input type="file" id="upload" hidden />
          <label className="button1" htmlFor="upload">
            Upload
          </label>
          {/*<Link to="/signin">
            <button className="button11">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="button12">Sign Up</button>
        </Link>*/}
          <Account />
        </ul>
      </div>
    </div>
    //</header>
  );
};

export default Header;
