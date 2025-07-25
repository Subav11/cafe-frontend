import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import "../styles/Header.css";

export default function Header() {
  const { user, cart } = useContext(AppContext);

  return (
    <div className="header-container">
      <h1 className="header-title">SBY Cafe</h1>
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/cart">MyCart ({cart?.length || 0})</Link>
        <Link to="/order">MyOrder</Link>
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        {user?.token ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
