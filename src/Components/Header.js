// Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLoginBtn = () => {
        navigate("/")
    }
  return (
    <nav className="">
      <div className="" style={{background: "white", height: "100vh", padding: "25px 35px 0px"}} >
        <Link to="/dashboard" style={{textDecoration: "none", color: "black",fontSize: "26px",fontWeight: "bold"}}>Attendance System</Link>
          
        <div id="navbarNav" >
          <ul style={{listStyle: "none", paddingLeft: "0px", marginTop: "20px"}}>
            <li>
              <Link className="navList "  to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link className="navList" to="/markattendance">Mark Attendance</Link>
            </li>
            <li>
              <Link className="navList" to="/employee">Employee Profile</Link>
            </li>
            <li>
              <Link className="navList" to="/attendancereport">Attendance Report</Link>
            </li>
          </ul>
          <button className="btn" onClick={handleLoginBtn}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
