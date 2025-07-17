import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css"; // Make sure this CSS file is created

export default function Profile() {
  const [profile, setProfile] = useState({});
  const { user, setUser } = useContext(AppContext);
  const [form, setForm] = useState({});
  const [error, setError] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const Navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const url = `${API_URL}/api/users/${user.id}/profile`;
      const result = await axios.get(url);
      setProfile(result.data);
      console.log(profile)
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const logout = () => {
    setUser({});
    Navigate("/");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/${profile._id}/profile`;
      await axios.patch(url, form);
      fetchProfile();
      setError("Profile updated successfully.");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>
      {error && <p className="profile-error">{error}</p>}
      <div className="profile-form">
        <label>First Name</label>
        <input
          name="firstName"
          type="text"
          defaultValue={profile.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          name="lastName"
          type="text"
          defaultValue={profile.lastName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          defaultValue={profile.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          defaultValue={profile.password}
          onChange={handleChange}
        />

        <div className="profile-actions">
          <button onClick={handleSubmit}>Update Profile</button>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}