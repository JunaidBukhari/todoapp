import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { handlelogout } from '../redux-toolkit/action';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const user = useSelector((state) => state.login.loggedInUser);
  console.log(user);
  const navigate = useNavigate();
  const logout = () => {
    dispatch(handlelogout(navigate));
  };
  return (
    <div id="home" className="bg-dark navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          My APP
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/todo" className="navbar-brand active">
                Todo
              </Link>
            </li>
          </ul>
        </div>
        {isAuthenticated && <span>Welcome {user.title}</span>}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          {isAuthenticated && (
            <button onClick={logout} className="btn btn-warning mr-5">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
