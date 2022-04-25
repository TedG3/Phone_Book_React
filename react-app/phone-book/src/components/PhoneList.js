import React from "react";
import PhoneCard from "./PhoneCard";

const PhoneList = (props) => {
  console.log(props);

  const deletePhoneHandler = (id) => {
    props.getPhoneId(id);
  };
  const renderPhoneList = props.phonenumbers.map((phone) => {
    return (
      <PhoneCard
        phone={phone}
        clickHandler={deletePhoneHandler}
        key={phone.id}
      />
    );
  });
  return <div className="ui celled list">{renderPhoneList}</div>;
};

export default PhoneList;
