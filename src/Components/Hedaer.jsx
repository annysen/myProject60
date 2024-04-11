import React from "react";
import { Link } from "react-router-dom";

const Hedaer = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <Link className="btn btn-ghost text-xl" to="/">
        My App
      </Link>

      <Link className="btn btn-ghost text-xl" to="/order">
        Order
      </Link>
      <Link className="btn btn-ghost text-xl" to="/login">
        Login
      </Link>
      <Link className="btn btn-ghost text-xl" to="/reg">
        Registration
      </Link>
    </div>
  );
};

export default Hedaer;
