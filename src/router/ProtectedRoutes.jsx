import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

function PrivateRoute({ authentication }) {
  const isAuthenticated = Cookies.get('accessToken');

  if (authentication) {
    return !isAuthenticated ? <Navigate to="/login" /> : <Outlet />;
  } else {
    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  }
}

PrivateRoute.propTypes = {
  authentication: PropTypes.bool.isRequired,
};

export default PrivateRoute;
