import React from "react";
import "./Login_Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/auth/action";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import { Link } from "react-router-dom";

const UserLogout = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(logoutSuccess());
  };
  const handleDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div className="userLogoutCard">
      <div onClick={handleDefault}>
        <PermIdentityIcon />
        Profile
      </div>
      <div onClick={handleDefault}>
        <Link to={`/${token}`} style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color:"black", width:"100%"}}>
          <BackpackOutlinedIcon />
          My Booking
        </Link>
      </div>
      <div onClick={handleClick}>
        <LogoutIcon />
        Logout
      </div>
    </div>
  );
};

export default UserLogout;
