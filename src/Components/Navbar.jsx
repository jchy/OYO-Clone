import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <div className={style.nav}>
      <Link to="/" style={{ paddingTop: "10px", paddingLeft: "5%" }}>
        <img src="./images/OYO_Logo.png" alt="" height="35px" width="90px" />
      </Link>

      <Link
        className={style.navLink2}
        to="/about"
        style={{
          width: "35%",
          textAlign: "right",
          borderRight: "2px solid rgb(238,238,238)",
          paddingTop: "10px"
        }}
      >
        <img src="./images/bmember.jpeg" alt="" height="45px" />
      </Link>

      <Link
        className={style.navLink2}
        to="/oyorooms"
        style={{
          borderRight: "2px solid rgb(238,238,238)",
          paddingTop: "10px"
        }}
      >
        <img src="./images/listproplogo.jpeg" alt="" height="45px" />
      </Link>

      <Link
        className={style.navLink2}
        to="/oyorooms"
        style={{
          borderRight: "2px solid rgb(238,238,238)",
          paddingTop: "10px"
        }}
      >
        <img src="./images/english.jpeg" alt="" height="30px" />
      </Link>

      <Link
        className={style.navLink2}
        to="/login-signup"
        style={{ textAlign: "center", paddingTop: "10px" }}
      >
        <img src="./images/loginlogo.jpeg" alt="" height="35px" />
      </Link>
    </div>
  );
};

export default Navbar;