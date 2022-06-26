import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux/es/exports";
import { handlelogin } from "../redux-toolkit/action";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state=>state.login.users);
  const [user, setUser] = useState({ username: "", password: "" });
  const login = (e) => {
    e.preventDefault();
    let loginUser = users.filter(
      (u) => u.username === user.username?.toLowerCase()
    );
    loginUser[0]
      ? loginUser[0].password === user.password
        ? dispatch(handlelogin(navigate, loginUser[0]))
        : toast.error("password is incorrect")
      : toast.error("User does not exist");
  };

  return (
    <div className="tab-pane fade show active">
      <form onSubmit={login}>
        <div className="form-outline mb-4">
          <input
            required
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Email or Username"
            name="username"
            type="email"
            id="loginName"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            type="password"
            name="password"
            id="loginPassword"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
