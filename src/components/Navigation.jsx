import { Link } from "react-router-dom";
import React from "react";

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link> |{" "}
        </li>
        <li>
          {" "}
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="blogs">Blogs</Link>
        </li>
        <li>
          <Link to="fetch">Fetch </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
