import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Add = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/create", user)
      .then((resp) => {
        toast.success(resp.data.msg, { position: "top-right" });
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="addUser">
      <Link to={"/"}>bACK</Link>
      <h3>Add New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            autoComplete="off"
            placeholder="First Name"
            onChange={inputHandler}
            value={user.fname}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            autoComplete="off"
            placeholder="last Name"
            onChange={inputHandler}
            value={user.lname}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            onChange={inputHandler}
            value={user.email}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Passeord</label>
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
            onChange={inputHandler}
            value={user.password}
          />
        </div>
        <button type="submit">ADD USER</button>
      </form>
    </div>
  );
};

export default Add;
