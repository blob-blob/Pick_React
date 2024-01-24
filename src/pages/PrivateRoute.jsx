import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!Cookies.get('accessToken');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true, state: { from: location } });
    }
  }, [isAuthenticated, navigate, location]);

  return isAuthenticated ? <Route {...rest} element={<Component {...rest} />} /> : null;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default PrivateRoute;
