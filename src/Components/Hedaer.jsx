import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProviders";

const Hedaer = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .cacth((error) => {
        console.log(error.message);
      });
  };
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

      {user ? (
        <>
          <p>{user.email}</p>
          <button onClick={handleLogout} className="btn btn-xs mx-5">
            Log out
          </button>
        </>
      ) : (
        <button className="btn btn-xs mx-5">Log in</button>
      )}
    </div>
  );
};

export default Hedaer;
