import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import "../styles/Order.css";

export default function Order() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { user } = useContext(AppContext);
  const [error, setError] = useState();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const url = `${API_URL}/api/orders/${user.email}`;
      const result = await axios.get(url);
      setOrders(result.data);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    if (user?.token) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="order-container">
      {
        user?.token ? (
          <>
            {error && <p className="error">{error}</p>}

            {orders.length === 0 ? (
              <p className="no-orders">No orders found.</p>
            ) : (
              orders.map((order) => (
                <div key={order._id} className="order-card">
                  <p><strong>Order ID:</strong> {order._id}</p>
                  <p><strong>Order Value:</strong> ₹{order.orderValue}</p>
                  <p><strong>Status:</strong> {order.status}</p>

                  <table className="order-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item) => (
                        <tr key={item._id}>
                          <td>{item.productName}</td>
                          <td>₹{item.price}</td>
                          <td>{item.qty}</td>
                          <td>₹{item.qty * item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))
            )}
          </>
        ) : (
          <button className="login-button" onClick={() => navigate("/login")}>
            Login to see orders
          </button>
        )
      }
    </div>
  );
}
