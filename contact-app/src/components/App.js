import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
export default App;
function App() {
  const contacts= [
    {
      id:"1",
      name:"Josh",
      email:"abcd@gmail.com",
    },
    {
      id:"2",
      name:"Andrew",
      email:"efgh@gmail.com",
    }
  ]};

function App() {
  return(  
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/> 
      <ContactList />
    </div>
  )}

