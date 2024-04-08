import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./user.css";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get("http://localhost:8000/api/getall")
        .then((resp) => {
          setUsers(resp.data);
        })
        .catch((error) => console.log(error));
    };
    fetchdata();
  }, []);
  return (
    <div className="userTable">
      <Link to={"/add"} className="addButton">
        Add User
      </Link>
      <table className="" border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>USER NAME</th>
            <th>USER EMAIL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>
                  <button>Delete</button>
                  <Link to={"/edit"}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
