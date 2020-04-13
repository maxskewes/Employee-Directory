import React, { Component } from 'react';
import "../css/header.css";

function Header() {
  return (
  <div className="header">
    <h1>EMPLOYEE DIRECTORY</h1>
    <p>Search Employee by Name.</p>
    <p>Alternately click "Name" to display in ascending/descending order.</p>
  </div>
  );
}

export default Header;
