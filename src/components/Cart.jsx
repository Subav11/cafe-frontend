import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios";
import "../styles/Cart.css";

export default function Cart() {
  const { user, cart, setCart } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const [error, setError] = useState();
  const Navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const increment = (id, qty) => {
    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, qty: qty + 1 } : product
    );
    setCart(updatedCart);
  };

  const decrement = (id, qty) => {
    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, qty: qty - 1 } : product
    ).filter(item => item.qty > 0);
    setCart(updatedCart);
  };

  useEffect(() => {
    setOrderValue(
      cart.reduce((sum, value) => {
        return sum + value.qty * value.price;
      }, 0)
    );
  }, [cart]);

  const placeOrder = async () => {
    try {
      const url = `${API_URL}/api/orders`;
      const newOrder = {
        userId: user._id,
        email: user.email,
        orderValue,
        items: cart,
      };
      await axios.post(url, newOrder);
      setCart([]);
      Navigate("/order");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>
      {error && <p className="cart-error">{error}</p>}
      {cart &&
        cart.map(
          (value) =>
            value.qty > 0 && (
              <li className="cart-item" key={value._id}>
                <span>{value.productName}</span>
                <span>₹{value.price}</span>
                <button onClick={() => decrement(value._id, value.qty)}>-</button>
                <span>{value.qty}</span>
                <button onClick={() => increment(value._id, value.qty)}>+</button>
                <span>₹{value.price * value.qty}</span>
              </li>
            )
        )}
      <div className="cart-order-summary">Order Value: ₹{orderValue}</div>
      <div className="cart-btn">
        
         {cart.length === 0 || cart.every((item) => item.qty === 0) ? (
    <p className="cart-empty">Your cart is empty.</p>
  ) : user?.token ? (
    <button onClick={placeOrder}>Place Order</button>
  ) : (
    <button onClick={() => Navigate("/login")}>Login to Order</button>
  )}
      
      </div>
    </div>
  );
}
