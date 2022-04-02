import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddPhone from "./AddPhone";
import PhoneList from "./PhoneList";

function App() {
  const LOCAL_STORAGE_KEY = "phonenumbers";
  const [phonenumbers, setPhoneNumbers] = useState([]);

  const addPhoneHandler = (phone) => {
    console.log(phone);
    setPhoneNumbers([...phonenumbers, phone]);
  };

  const removePhoneHandler = (id) => {
    const newPhoneList = phonenumbers.filter((phone) => {
      return phone.id !== id;
    });

    setPhoneNumbers(newPhoneList);
  };

  useEffect(() => {
    const retrivePhoneNumbers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivePhoneNumbers) setPhoneNumbers(retrivePhoneNumbers);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(phonenumbers));
  }, [phonenumbers]);

  return (
    <div className="ui container">
      <Header />
      <AddPhone addPhoneHandler={addPhoneHandler} />
      <PhoneList phonenumbers={phonenumbers} getPhoneId={removePhoneHandler} />
    </div>
  );
}

export default App;