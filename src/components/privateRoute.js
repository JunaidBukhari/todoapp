import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import toast from 'react-hot-toast';
const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  useEffect(() => {
    return () => {
      if (!isAuthenticated)
        toast.error('You must be logged in to view this page');
    };
  }, []);
  if (isAuthenticated) return <Component />;
  else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
