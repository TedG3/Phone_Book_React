import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const element =( 
    <><h2>Phone Directory</h2>
    <div id='nav_div'>
      <button className="button">Home</button>
      <button className ="button" >Add Phone Number</button>
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
