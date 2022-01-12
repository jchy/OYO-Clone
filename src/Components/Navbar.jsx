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
      <Link className={style.navLink} to="/counter">
        Counter
      </Link>
      <Link className={style.navLink} to="/leavemsg">
        Leave Msg
      </Link>
      <Link className={style.navLink} to="/todoapp">
        Todo App
      </Link>
    </div>
  );
};

export default Navbar;
