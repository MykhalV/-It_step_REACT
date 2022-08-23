import React from "react";
import "./Sidebar.css";

const Sidebar = (ListSidebar) => {
  const countUser = ListSidebar.ListSidebar.length; 
  const UserArr = ListSidebar.ListSidebar;

    let workStatus = 0, familyStatus = 0, privateStatus = 0, friendsStatus = 0;
    UserArr.forEach(element => {
      if (element.status === "Work"){
        workStatus += 1;
      }else if (element.status === "Family"){
        familyStatus += 1;
      }else if (element.status === "Private"){
        privateStatus += 1;
      }else if (element.status === "Friends"){
        friendsStatus += 1;
      }
    });


  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="contacts-labels">
        <div className="title">
          All contacts: <span>{countUser}</span>
        </div>
        <div className="list">
          <div className="unit">
            <div className="lab lab-success">Work</div>
            {<span>{workStatus}</span>}
          </div>
          <div className="unit">
            <div className="lab lab-primary">Family</div>
            <span>{familyStatus}</span>
          </div>
          <div className="unit">
            <div className="lab lab-danger">Private</div>
            <span>{privateStatus}</span>
          </div>
          <div className="unit">
            <div className="lab lab-warning">Friends</div>
            <span>{friendsStatus}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
