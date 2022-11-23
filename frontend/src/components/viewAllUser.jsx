import "./viewAllUser.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAllUser } from "../redux/actions/userAction";

const ViewAllUser = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.getAllUser);

  console.log(user);
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <div className="view__all__user">
      <h2>All User</h2>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        user.map((u, i) => (
          <div key={i}>
            <div className="user__segment">
              <div>{u.name}</div>
              <div className="user__dept">{u.department}</div>
              <div>
                <Link to={`/updateuser/${u._id}`}>Update</Link>
              </div>
              <div>
                <Link to={`/deleteuser/${u._id}`}> Delete</Link>
              </div>
            </div>
          </div>
        ))
      )}
      <h2>
        <Link
          to="/adminhome"
          style={{ textdecoration: "none", color: "deeppink" }}
        >
          Back to Home
        </Link>
      </h2>
    </div>
  );
};

export default ViewAllUser;
