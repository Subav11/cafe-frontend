import { useState } from "react";
import { Link } from "react-router-dom";
//to enable frontend to use our backend apis
import axios from "axios";
export default function Register() {
  const [user, setUser] = useState({});
  const [err, setError] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/register`;
      const result = await axios.post(url, user);
      setError("Data saved successfully");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  return (
    <div>
      <h2>Registration Form</h2>
      <p>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
      </p>
      <p>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <p>{err}</p>
      <hr />
      <h4>Already a member? <Link to="/login">Login</Link></h4>
    </div>
  );
}
