import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faPenToSquare,faCircle,faCircleUser, faMessage, faEnvelope, faCircleCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Divider from '@material-ui/core/Divider';

function Tickets({
  searchTerm,
  setSearchTerm,
  priority,
  setPriority,
  status,
  setStatus,
  timeFrame,
  setTimeFrame
}) {
  return (
    <div className="content_main">
      <div className="Main_content-card">
        <div className="card-container" id="cardContainer">
          <div className="card-container-header">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search for ticket"
              />
            </div>
            <div className="card-container-header_dropdown" style={{marginLeft:195}}>
              <div className="dropdown">
                <button className="ddbtn">
                  Select Priority <FontAwesomeIcon icon={faCaretDown} />
                </button>

                <div className="dropdown-options">
                  <div className="Blank"></div>
                  <a href="#">High</a>
                  <a href="#">Low</a>
                  <a href="#">Medium</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="ddbtn">
                  Select Status <FontAwesomeIcon icon={faCaretDown} />
                </button>

                <div className="dropdown-options">
                  <div className="Blank"></div>
                  <a href="#">New Tickets</a>
                  <a href="#">Ongoing Tickets</a>
                  <a href="#">Resolved Tickets</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="ddbtn">
                  This Week <FontAwesomeIcon icon={faCaretDown} />
                </button>

                <div className="dropdown-options">
                  <div className="Blank"></div>
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                </div>
              </div>
            </div>
            <button className="Ticket-button">
            <FontAwesomeIcon icon={faPenToSquare} />{" "}
              New Ticket
            </button>
          </div>
        </div>
      </div>

      <div className="content-card">
        <div className="status-bar">
        <FontAwesomeIcon icon={faEnvelope} />
        <text style={{marginLeft: 15}}> All Tickets</text>
        </div>
        <div className="status-bar">
        <FontAwesomeIcon icon={faMessage} />
        <text style={{marginLeft: 15}} >New</text> 
        </div>
        <div className="status-bar">
        <FontAwesomeIcon icon={faSpinner} />
        <text style={{marginLeft: 15}}>Ongoing</text> 
        </div>
        <div className="status-bar">
        <FontAwesomeIcon icon={faCircleCheck} />
        <text >Resolved</text> 
        </div>
        <div style={{marginLeft: 185}}>
          <button className="btn3"> CSV </button>
          <button className="btn3"> Excel </button>
          <button className="btn3"> Print </button>
        </div>
        </div>
      <div className="ticket-content">
        <div className="tickets-priority">
        <div><FontAwesomeIcon icon={faCircle} style={{color: "#fbc985",}} />  Ticket #15998
        <button className="hold"> On Hold</button>
        <text className="dad">Posted at 12:45 AM | 19-10-2023</text>
        </div>
        How to deposite money to portal? 
        <p>You may be able to deposit cash into your online bank account using an in-store network of retail locations, a cash-taking network ATM, bank-to-bank transfer, money order, cashier's check or prepaid card.</p>
        <Divider/>
        <div style={{marginTop:20 }}><FontAwesomeIcon icon={faCircleUser} />  <text><span style={{color: "#84818a",}}>John Snow </span> 
        <span style={{marginLeft: '20px'}}>Problem Type : <span style={{fontSize: 'small'}}>Bill Not Generating </span>  </span>
        <span className="openTkt">Open Ticket</span> <span className="closetkt">Close Ticket</span>
        </text>
        </div>
        </div>

      </div>

      <div className="ticket-content">
        <div className="tickets-priority">
        <div><FontAwesomeIcon icon={faCircle} style={{color: "#3b8aff",}} />  Ticket #15998
        <button className="priority"> High Priority</button>
        <text className="dad">Posted at 12:45 AM | 19-10-2023</text>  
        </div>
        How to deposite money to portal? 
        <p>You may be able to deposit cash into your online bank account using an in-store network of retail locations, a cash-taking network ATM, bank-to-bank transfer, money order, cashier's check or prepaid card.</p>
        <Divider/>
        <div style={{marginTop:20 }}><FontAwesomeIcon icon={faCircleUser} />  <text><span style={{color: "#84818a",}}>John Snow </span> 
        <span style={{marginLeft: '20px'}}>Problem Type : <span style={{fontSize: 'small'}}>Bill Incorrect </span>  </span>
        <span className="openTkt">Open Ticket</span> <span className="closetkt">Close Ticket</span>
        </text>
        </div>
        </div>

      </div>

      <div className="ticket-content">
        <div className="tickets-priority">
        <div><FontAwesomeIcon icon={faCircle} style={{color: "#54C104",}} />  Ticket #15998
        <button className="hold"> On Hold</button>
        <text className="dad">Posted at 12:45 AM | 19-10-2023</text>
        </div>
        How to deposite money to portal? 
        <p>You may be able to deposit cash into your online bank account using an in-store network of retail locations, a cash-taking network ATM, bank-to-bank transfer, money order, cashier's check or prepaid card.</p>
        <Divider/>
        <div style={{marginTop:20 }}><FontAwesomeIcon icon={faCircleUser} />  <text><span style={{color: "#84818a",}}>John Snow </span> 
        <span style={{marginLeft: '20px'}}>Problem Type : <span style={{fontSize: 'small'}}>Mobile OTP Issue </span>  </span>
        <span className="openTkt">Open Ticket</span> <span className="closetkt">Close Ticket</span> </text>
        </div>
        </div>

      </div>
  
      </div>

        
  );
}

export default Tickets;
