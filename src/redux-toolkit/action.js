import { setLoggedInUser, setLogout } from "./loginSlice";
import { clearAll } from "./todoSlice";

export const handlelogin = (navigate, u) => (dispatch) => {
  dispatch(setLoggedInUser(u)).then((res) => navigate("/"));
};

export const handlelogout = (navigate) => (dispatch) => {
  dispatch(clearAll())
  dispatch(setLogout()).then((res) => navigate("/login"));
};
