import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404: Page not found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default NotFound;
