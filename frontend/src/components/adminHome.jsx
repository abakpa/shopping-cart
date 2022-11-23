import React from "react";
import "./adminHome.css";
import { Link } from "react-router-dom";
// const userRegistration =  "./userRegistration";

const adminHome = () => {
  return (
    <div className="admin__home">
      <div className="user__section">
        <h2>User Section</h2>
        <div>
          <Link to="/userRegistration">User Registration</Link>
        </div>
        <div>
          <Link to="/viewAllUser">View Users</Link>
        </div>
      </div>
      <div className="product__section">
        <h2>Product Section</h2>
        <div>
          <Link to="/registerproduct">Register Product</Link>
        </div>
        <div>
          <Link to="/viewallproduct">View Product</Link>
        </div>
      </div>
    </div>
  );
};
export default adminHome;
