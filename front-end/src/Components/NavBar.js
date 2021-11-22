import React from 'react';
import "./NavBar.css";

export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">React Blog</a>
      <a className="navbar-right" href="#">Sign Up</a>
      <a className="navbar-right" href="#">Log In</a>
      <a className="navbar-left" href="#">Create</a>
      <a className="navbar-left" href="#">Search</a>


    </nav>
  );

}