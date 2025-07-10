import { useState } from "react";
//to enable frontend to use our backend apis
import axios from "axios";
export default function Register() {
  const [user, setUser] = useState({});
  const [err, setError] = useState();
  const handleSubmit = async () => {
    try {
      // const url = "http://localhost:8081/api/users/register";
      const url = "https://cafe-backend-khaki.vercel.app/api/users/register"
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
      <p>
        {err}
      </p>
    </div>
  );
}
