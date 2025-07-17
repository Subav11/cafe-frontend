import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "../styles/Admin.css"

export default function Admin() {
  const location = useLocation();
  return (
    <div className="admin-container">
      <div className="admin-links">
        <Link to="/admin" className={location.pathname === "/admin" ? "active" : ""}>Users</Link>
        <Link to="/admin/products" className={location.pathname === "/admin/products" ? "active" : ""}>Products</Link>
        <Link to="/admin/orders" className={location.pathname === "/admin/orders" ? "active" : ""}>Orders</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
