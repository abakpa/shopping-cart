import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./userRegistration.css";
import { registerUser } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const reg = useSelector((state) => state.postUser);
  const navigate = useNavigate();

  const registerUsers = (e) => {
    e.preventDefault();
    const postData = {
      name,
      department,
      status,
      email,
      password,
    };
    dispatch(registerUser(postData));
    reg ? navigate("/adminhome") : navigate("userregistration");
  };

  return (
    <div>
      <form onSubmit={registerUsers}>
        <div className="user__registration">
          <h2>User Registration</h2>

          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <label>Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default UserRegistration;
