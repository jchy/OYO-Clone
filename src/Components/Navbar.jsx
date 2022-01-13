import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.nav}>
      <Link className={style.navLink} to="/">
        Home
      </Link>
      <Link className={style.navLink} to="/about">
        About
      </Link>
      <Link className={style.navLink} to="/todoapp">
        Hotels
      </Link>
    </div>
  );
};

export default Navbar;
