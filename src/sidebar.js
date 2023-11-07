import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faUsers, faGear, faTicket } from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_content" >
        <h3>
          TICKET<span className="KPDCL"> KPDCL</span>
        </h3>
        <ul className="Nav" >
          <li>
          <FontAwesomeIcon icon={faHouse}  />
            <a href="#">Dashboard</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faUser}  />
            <a href="#">Users</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faTicket} />
            <a href="#">Tickets</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faUsers}  />
            <a href="#">Workgroups</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faGear} />
            <a href="#">Site Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
