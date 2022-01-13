import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.nav}>
      <Link className={style.navLogo} to="/">
        <img src="./images/OYO_Logo.png" alt="img" height="35px" width="90px" />
      </Link>
      <Link className={style.navLink} to="/">
        Home
      </Link>
      <Link className={style.navLink} to="/about">
        About
      </Link>
      <Link className={style.navLink} to="/oyorooms">
        Hotels
      </Link>
    </div>
  );
};

export default Navbar;
