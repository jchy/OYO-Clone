import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <Link to="/">Home</Link>
      <Link to="/hotels">Users</Link>
      <Link to="/about">About</Link>
      <Link to="hoteldetails">Hotel Details</Link>
    </div>
  );
};

export default NavBar;
