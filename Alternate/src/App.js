import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Addphone from "./AddPhone.js";
const element =( 
    <><div id='title_div'>
    <h1 id="title">Phone Directory</h1></div>
    <div id='nav_div'>
      <button className="button">Home</button>
      <button type ="button" className ="button" onclick="alert('Hello world!')" >Add Phone Number</button>
      <button type="button" onclick="alert('Hello world!')">Click Me!</button>
      <button className ="button">Search</button>
      <button className ="button">Favourites</button>
    </div></>)
function App () {
ReactDOM.render(
    element,
    document.getElementById('root')
  );
}  
export default App;



