import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <div className={style.nav}>
      <Link to="/" style={{ width: "15%",paddingTop: "10px", paddingLeft: "5%" }}>
        <img src="./NavImages/OYO_Logo.png" alt="" height="35px" width="90px" />
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
        <img src="./NavImages/bmember.jpeg" alt="" height="45px" />
      </Link>

      <Link
        className={style.navLink2}
        to="/oyorooms"
        style={{width: "15%",
          borderRight: "2px solid rgb(238,238,238)",
          paddingTop: "10px"
        }}
      >
        <img src="./NavImages/listproplogo.jpeg" alt="" height="45px" />
      </Link>

      <Link
        className={style.navLink2}
        to="/oyoroomsk"
        style={{
          width: "15%",
          borderRight: "2px solid rgb(238,238,238)",
          paddingTop: "10px"
        }}
      >
        <img src="./NavImages/english.jpeg" alt="" height="30px" />
      </Link>

      <Link
        className={style.navLink2}
        to="/login-signup"
        style={{ width: "20%",textAlign: "center", paddingTop: "10px" }}
      >
        <img src="./NavImages/loginlogo.jpeg" alt="" height="35px" />
      </Link>
    </div>
  );
};

export default Navbar;
