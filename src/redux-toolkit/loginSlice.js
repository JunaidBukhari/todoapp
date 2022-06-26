import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  users:[
    {
      username: "admin@gmail.com",
      password: "admin",
      title: "ADMIN",
    },
    {
      username: "admin1@gmail.com",
      password: "admin1",
      title: "ADMIN 1",
    },
  ],
  loggedInUser: {},
  isAuthenticated: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
      state.isAuthenticated = true;
      toast.success("Logged In Successfully");
    },
    setLogout: (state, action) => {
      state.loggedInUser = {};
      state.isAuthenticated = false;
      toast.success("Log out Success");
    },
  },
});

export const { setLogout, setLoggedInUser } = loginSlice.actions;

export default loginSlice.reducer;
