import "./deleteUser.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";

import { deleteUser } from "../redux/actions/userAction";
import { getUser } from "../redux/actions/userAction";

const DeleteUser = () => {
  const users = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.getUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser(users.userId));
  }, [dispatch, users.userId]);

  const deleteUsers = (e) => {
    e.preventDefault();
    dispatch(deleteUser(users.userId));
    navigate("/viewalluser");
  };
  return (
    <div className="delete__user">
      {/* {users.userId} */}

      <h4>
        Are you sure you want to delete user <span>{user.name}?</span>
      </h4>
      <form onSubmit={deleteUsers}>
        <Link to="/viewalluser" className="go__back">
          Go Back
        </Link>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};
export default DeleteUser;
