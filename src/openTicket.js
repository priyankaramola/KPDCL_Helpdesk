import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
const OpenTicket=()=> {
    return(
        <div className="tkt-detail">
        <div className="tickets-priority">
        <div><FontAwesomeIcon icon={faCircle} style={{color: "#fbc985",}} />  Ticket #15998
        <text className="dad">Posted at 12:45 AM | 19-10-2023</text>
        </div><br/>
        <p> 
          <span style={{fontWeight: "bold", fontSize: '18px', marginBottom: '20px'}}> 
          How to deposite money to portal? 
          </span>
        <br /> 
        You may be able to deposit cash into your online bank account using an in-store network of retail locations, a cash-taking network ATM, bank-to-bank transfer, money order, cashier's check or prepaid card.
        </p>
        <div className="ticket-reply">
        <div className="tickets-priority">
          
        <div className="container">
      <div className="left-column line-space">
        <h3>
          Reply to Ticket 
        </h3>
          <h4 className="p-space"> Problem Type : <span style={{fontSize:12}}>Bill Not Generating </span></h4>
          <h4 className="p-space">  Last Activity time : <span style={{fontSize:12}}>12:45 AM | 19-10-2023 </span></h4>
          <h4 className="p-space">  Last Progress : <span style={{fontSize:12}}>Ticket Closed </span></h4>
          <h4 className="p-space">  Last Action by : <span style={{fontSize:12}}>Elon Musk </span></h4>

          <h5 className="line-space" style={{fontSize:12}}> Ticket Body </h5>
      </div>
      <div className="right-column ">
          <h3 className="line-space" style={{marginLeft:250}}> Status: <span style={{fontSize:12}}> Resolved </span> <FontAwesomeIcon icon={faCircle} style={{color: "#76fb46",}} />  </h3>
          <h4 className="p-space"> Ticket created by : <span style={{fontSize:12}}>Khan Shah</span><span className="days-ago" >4d ago</span></h4>
          <h4 className="p-space"> Ticket assigned to : <button className="networking-button">networking</button> <span className="days-ago" >4d ago</span></h4>
          <h4 className="p-space"> Ticket transferred to : <span style={{fontSize:12}}>Bill Gates </span><span className="days-ago" >4d ago</span></h4>
          <h4 className="p-space"> Ticket resolved by : <span style={{fontSize:12}}>Bill Gates </span><span className="days-ago" >4d ago</span></h4>
          <h4 className="previous-remarks line-space" > Previous Remarks </h4>
      </div>
    </div>

        </div> 
        <div className="ticket-content">
          <input placeholder="Reply to this ticket..." style={{height: 150}}></input>
        </div>
        <div style={{marginLeft:560}}>
           <button className="attachbtn"><text>Attach files</text><FontAwesomeIcon icon={faUpload} style={{color: "#cab4fd",marginLeft:15}} /> </button>
           <button className="hold"> On Hold</button>
           <button className="transfer-button"> Transfer Ticket</button>
           <button className="Ticket-button">Submit Reply</button>
        </div>
        </div>
        </div>
        </div>
    )
}
export default OpenTicket;

