import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function name_format(user){
  return user.firstname + ' ' + user.lastname
}
const contact =
{id:0,
  firstname:'Example',
  lastname:'2',
  email:'Example@123.com',
}
ReactDOM.render(
    <h1>Hello, {name_format(contact)}!</h1>,
    document.getElementById('root')
  );