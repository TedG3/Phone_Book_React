import React from "react";
import user from "../images/phone.png";

const PhoneCard = (props) => {
  const { id, name, phone } = props.phone;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{phone}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "grey", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default PhoneCard;
