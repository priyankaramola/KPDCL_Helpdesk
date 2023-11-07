import React, { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Tickets from "./ticket";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import "./styles.css";
import OpenTicket from "./openTicket";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [timeFrame, setTimeFrame] = useState("This Week");

  return (
    <div className="Main">
      <Sidebar />

      <div className="content">
        <Header />
        <div className="heading-comp">
          <div className="tickets">Tickets</div>
          <p className="para-warning">
            Tickets must be Solved / Resolved within three working days
          </p>
        </div>
      <OpenTicket/>
      <Tickets
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          priority={priority}
          setPriority={setPriority}
          status={status}
          setStatus={setStatus}
          timeFrame={timeFrame}
          setTimeFrame={setTimeFrame}
        />
      </div>
    </div>
  );
}

export default App;
