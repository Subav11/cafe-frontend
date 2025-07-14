import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [form, setForm] = useState({
    productName: "",
    description: "",
    price: Number,
    imgUrl: "",
  });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [searchVal, setSearchVal] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchProducts = async () => {
    try {
      setError("Loading...");
      const url = `${API_URL}/api/products/showProducts?page=${page}&limit=${limit}&search=${searchVal}`;
      const result = await axios.get(url);
      setProducts(result.data.products);
      setTotalPages(result.data.total);
      setError();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      const url = `${API_URL}/api/products/addProduct`;
      const result = await axios.post(url, form);
      fetchProducts();
      setError("User added successfully");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      const url = `${API_URL}/api/products/${id}`;
      const result = await axios.delete(url);
      setError("User deleted successfully");
      fetchProducts();
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <div>
      <div>
        Product Management
        <div>
          {error}
          <input
            name="productName"
            onChange={handleChange}
            type="text"
            placeholder="Product Name"
            required
          />
          <input
            name="description"
            onChange={handleChange}
            type="text"
            placeholder="Description"
            required
          />
          <input
            name="price"
            onChange={handleChange}
            type="number"
            placeholder="Price"
            required
          />
          <input
            name="imgUrl"
            onChange={handleChange}
            type="text"
            placeholder="Image Url"
            required
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button onClick={() => fetchProducts()}>Search</button>
        </div>
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image Url</th>
                <th>Action</th>
              </tr>
            </thead>
            {products &&
              products.map((product) => (
                <tbody key={product._id}>
                  <tr>
                    <td>{product.productName}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.imgUrl}</td>
                    <td>
                      <button onClick={() => handleDelete(product._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            <tfoot></tfoot>
          </table>
        </div>
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          Page {page} of {totalPages}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
