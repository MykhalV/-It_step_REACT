import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ContactItem.css";

const ContactItem = ({
  avatar,
  email,
  name,
  phone,
  status,
  gender,
  favorite,
  onChangeStatus,
  onChangeStatusStar,
}) => {
  const URL_AVATAR = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
  let statusStyles = "lab lab-warning";
  let favoriteStyles = "star";
  switch (status) {
    case "Friend":
      statusStyles = "lab lab-warning";
      break;
    case "Private":
      statusStyles = "lab lab-danger";
      break;
    case "Family":
      statusStyles = "lab lab-primary";
      break;
    default:
      statusStyles = "lab lab-success";
      break;
  }

  switch (favorite) {
    case true:
      favoriteStyles = "star starFavorite";
      break;
    default:
      favoriteStyles = "star";
      break;
  }

  const star = <FontAwesomeIcon icon={faStar} size="2x" />;


  return (
    <div className="unit">
      <div className="field name">
        <span className={favoriteStyles} onClick={onChangeStatusStar}>{star}</span>
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>

        <div>
          <img src={URL_AVATAR} alt="avatar" className="avatar" /> {name}
        </div>
        <div className={statusStyles} onClick={onChangeStatus}>
          {status}
        </div>
      </div>
      <div className="field phone">{phone}</div>
      <div className="field email">{email}</div>
    </div>
  );
};

export default ContactItem;
