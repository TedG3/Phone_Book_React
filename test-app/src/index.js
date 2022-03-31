import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function name_format(user){
  return user.firstname + ' ' + user.lastname
}
function add_contact(){
  <div className="ui main">
  <h2>Add Contact</h2>
  <form className="ui form">
      <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
      </div>
      <div className="field">
          <label>Email</label>
          <input type="text" name="name" placeholder="abcd@gmail.com" />
          <input type="text" name="name" placeholder="Name" />
      </div>
      <button className="ui button blue">Add</button>
  </form>
</div>
}
const contact =
{id:0,
  firstname:'Example',
  lastname:'2',
  email:'Example@123.com',
}
const startui = (
  <div>
    <h1>Hello!</h1>
    <button type="button">Add Contact</button>
  </div>
)
ReactDOM.render(
    startui,
    document.getElementById('root')
  );