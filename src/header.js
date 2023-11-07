import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faBell, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faUser}  />
      <h4>Welcome! Mark Zuckerberg</h4>
      <button className="admin-button">ADMIN</button>
      <button className="notification-button">
      <FontAwesomeIcon icon={faBell} style={{color: "#202124",}} />
      </button>

      <div className="dropdown">
        <button className="profilebtn"> 
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "20px" }} />
          Zuckerberg
          <FontAwesomeIcon icon={faCircleChevronDown} style={{color: "#202124",marginLeft:10}} />
          
        </button>

        <div className="dropdown-options">
          <div className="Blank"></div>
          <a href="#">Gates</a>
          <a href="#">Pichai</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
