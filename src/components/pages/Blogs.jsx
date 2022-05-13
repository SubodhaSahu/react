import React from "react";
import { Link } from "react-router-dom";

function Blogs(props) {
  return (
    <div>
      This is a blog post
      <ul>
        <li>
          <Link to="/blogs/1">Post One</Link>
        </li>
        <li>
          <Link to="/blogs/2">Post Two</Link>
        </li>
      </ul>
    </div>
  );
}

export default Blogs;
