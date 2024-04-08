import React from "react";
import { Link } from "react-router-dom";
const Edit = () => {
  return (
    <div className="addUser">
      <Link to={"/"}>bACK</Link>
      <h3>Update User</h3>
      <form>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            autoComplete="off"
            placeholder="First Name"
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
          />
        </div>

        <button type="submit">UPDATE USER</button>
      </form>
    </div>
  );
};

export default Edit;
