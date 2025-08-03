import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Posts list</Link>
      { " | " }
      <Link to="/new">New post</Link>
    </nav>
  );
}