import { memo } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
const AuthRoute = ({ component: Component }) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  if (!isAuthenticated) return <Component />;
  else {
    return <Navigate to="/" />;
  }
};

export default memo(AuthRoute);
