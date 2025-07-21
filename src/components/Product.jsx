import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import "../styles/Product.css";

export default function Product() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const { user, cart, setCart } = useContext(AppContext);

  const fetchProducts = async () => {
    try {
      const url = `${API_URL}/api/products/all?page=${page}&limit=${limit}`;
      const result = await axios.get(url);
      setProducts(result.data.products);
      setTotalPages(result.data.total);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const addToCart = (product) => {
    const found = cart.find((item) => item._id === product._id);
    if (!found) {
      const updatedProduct = { ...product, qty: 1 };
      setCart([...cart, updatedProduct]);
    } else {
      const updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedCart);
    }
  };

  return (
    <div className="product-page">
      <div className="product-list">
        {products &&
          products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.imgUrl} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <h4>₹{product.price}</h4>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>
      <div className="pagination-controls">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        {page} of {totalPages}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
