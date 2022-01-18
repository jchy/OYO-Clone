import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserLogout from "./login_signup/UserLogout";
import style from "./navbar.module.css";
import { useSelector } from "react-redux"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from "./SearchBar/Search"
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar2 = () => {
    const { mail, isAuth } = useSelector(state => state.auth)
    return (
        <>
            <div className={style.nav}>
                <Link to="/" style={{ width: "15%", paddingTop: "10px", paddingLeft: "5%" }}>
                    <img src="./NavImages/OYO_Logo.png" alt="" height="35px" width="90px" />
                </Link>
                <Search />

                <Link
                    className={isAuth ? style.heading3 : style.navLink2}
                    to="/login-signup"
                    style={{ width: "20%", textAlign: "center", paddingTop: "10px" }}
                >
                    {isAuth ?
                        <>
                            <h3 className={style.heading}><AccountCircleIcon sx={{ fontSize: 40 }} />{mail}</h3>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div className={style.userLogout}> <UserLogout /></div>
                            </div>
                        </> :
                        <img src="./NavImages/loginlogo.jpeg" alt="" height="35px" />}

                </Link>
            </div>

        </>
    );
};

export default Navbar2;