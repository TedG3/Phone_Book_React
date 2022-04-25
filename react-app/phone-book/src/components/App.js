import React, { useState, useEffect } from "react";
import "./App.css";
import api from "../api/phonenumbers"
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import AddPhone from "./AddPhone";
import PhoneList from "./PhoneList";

function App() {
  const [phonenumbers, setPhoneNumbers] = useState([]);

  const retrievePhonenumbers = async ()=> { 
    const response = await api.get("/phonenumbers");
    return response.data;
};

  const addPhoneHandler = async (phone) => {
    console.log(phone);
    const request= {
      id:uuidv4(),
      ...phone
    }
    console.log(request);
    const response = await api.post("/phonenumbers",request)
    setPhoneNumbers([...phonenumbers, response.data]);
  };

  const removePhoneHandler = async (id) => {
    await api.delete(`phonenumbers/${id}`);
    const newPhoneList = phonenumbers.filter((phone) => {
      return phone.id !== id;
    });

    setPhoneNumbers(newPhoneList);
  };

  useEffect(() => {
    const getAllPhonenumbers = async() => {
      const allPhonenumbers= await retrievePhonenumbers();
      if (allPhonenumbers) setPhoneNumbers(allPhonenumbers)
    }
    getAllPhonenumbers();
  }, []);

  useEffect(() => {
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