import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
