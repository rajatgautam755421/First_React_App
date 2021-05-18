import React from "react";
import { Link } from "react-router-dom";

export default function sidenav() {
  return (
    <div>
      <div class="sidenav">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/cards">Cards</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/">GAllery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
