import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
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
  ];
import './App.css';

function App() {
  const contacts=  
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/> 
      <ContactList />
    </div>
  );
}
export default App;
