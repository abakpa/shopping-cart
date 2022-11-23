import "./updateUser.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getUser } from "../redux/actions/userAction";
import { updateUser } from "../redux/actions/userAction";

const UpdateUser = () => {
  const [name, setName] = useState();
  const [department, setDepartment] = useState();
  const users = useParams();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(getUser(users.userId));
  }, [dispatch, users.userId]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setDepartment(user.department);
    }
  }, [user]);

  const handleUpdate = () => {
    const updatePost = {
      name,
      department,
    };
    dispatch(updateUser(users.userId, updatePost));
  };
  return (
    <div className="update__user">
      <h2>Update User</h2>
      {/* {users.userId}
      {user.name} */}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <form onSubmit={handleUpdate}>
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
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default UpdateUser;
