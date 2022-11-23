import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/adminActions";
import "./Admin.css";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.postAdmin);

  const dispatch = useDispatch();

  const adminLogin = (e) => {
    e.preventDefault();
    const postData = {
      email,
      password,
    };
    dispatch(loginUser(postData));
    user.user.data ? navigate("/adminhome") : navigate("/admin");
  };
  return (
    <form onSubmit={adminLogin}>
      <div className="admin__color">
        <div className="admin__arrange">
          <p>Admin Login</p>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default Admin;
