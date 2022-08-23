import React from "react";
import "./ContactList.css";

// Import Contact Item
import ContactItem from "../ContactItem/Contactitem";

const ContactList = ({ List, onChangeStatus, onChangeStatusStar }) => {
  const listItem = List.map((contact) => {
    return (
      <ContactItem
        key={contact.id}
        {...contact}
        onChangeStatus={() => onChangeStatus(contact.id)}
        onChangeStatusStar={() => onChangeStatusStar(contact.id)}
      />
    );
  });
  return (
    <div className="col-lg-9 col-md-8 col-sm-12">
      <div className="contacts-list">
        <div
          className="ac-custom ac-checkbox ac-checkmark"
          autoComplete="off"
        ></div>
        <div className="unit head">
          <div className="field name">
            <div className="check">
              <input id="cb1" name="cb1" type="checkbox" />
              <label htmlFor="cb1"></label>
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </div>
            Name
          </div>
          <div className="field phone">Phone</div>
          <div className="field email icons">Email</div>
        </div>
        {listItem}
      </div>
    </div>
  );
};

export default ContactList;
